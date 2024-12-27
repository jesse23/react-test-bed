import { useState, useEffect, useRef, useCallback } from "react";

interface Job {
  execute: Function;
  jobId?: number;
}

/**
 * A hook to defer tasks until the next state update.
 *
 * - Tasks can be sync or async, but they will be executed in the next state update.
 * - Task execution order is not guaranteed, especially for tasks added asynchronously.
 *
 * NOTE: Not for production use since the API is not stable.
 *
 * @returns {Function} defer - A function to defer a callback.
 */
export const useDeferJobQueue = () => {
  const queueRef = useRef<Job[]>([]);
  const [trigger, triggerRender] = useState(0); // Dummy state to force re-renders

  /**
   * Adds a callback to the queue.
   * @param {Function} job - The job to defer.
   */
  const addJob = useCallback((job: Job) => {
    queueRef.current.push(job); // Add to the queue
    triggerRender((prev) => prev + 1); // Trigger a state update to process the queue
  }, []);

  // Trigger processing when the dummy state changes
  useEffect(() => {
    if (queueRef.current.length > 0) {
      const currentQueue = [...queueRef.current];
      queueRef.current = []; // Clear the queue before processing

      currentQueue.forEach((job) => {
        try {
          job.execute();
        } catch (error) {
          console.error("useDeferredEffect: Error executing job:", error);
        }
      });
    }
  }, [trigger]);

  return { defer: addJob };
};

/**
 * NOTE: this version has possibility to fail in react.
 * In one of the react18 compatible mode practice, somehow
 * addJob, which is setJobQueue([...prevQueue, job]), will
 * trigger the useEffect in sync, and it will trigger the
 * setJobQueue([]). The job get lost during the scenario.
 *
 *
 * A hook to defer tasks until next state update.
 *
 * - Task could be sync or async, but it will be just simply triggered.
 * - Task could be added by sync or async, but it will be executed in the next state update, and the order is not guaranteed especially for the task added by async.
 *
 * NOTE: Not for production use since API is not stable.
 *
 * @returns {Function} defer - A function to defer a callback.
 */
export const useDeferJobQueueLegacy = () => {
  const [jobQueue, setJobQueue] = useState([] as Job[]);

  /**
   * Adds a callback to the queue.
   * @param {Function} callback - The callback function to defer.
   */
  const addJob = useCallback((job: Job) => {
    setJobQueue((prevQueue) => [...prevQueue, job]);
  }, []);

  useEffect(() => {
    if (jobQueue.length > 0) {
      jobQueue.forEach((job) => {
        try {
          job.execute();
        } catch (error) {
          console.error("useDeferredEffect: Error executing callback:", error);
        }
      });
      setJobQueue([]); // Clear the queue after execution
    }
  }, [jobQueue]);

  return { defer: addJob };
};
