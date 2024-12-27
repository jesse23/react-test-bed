import { useRef, useCallback, useEffect } from "react";

interface Job {
  schedulerId: number;
  execute: Function;
  type: string;
  context: any;
  unschedule: Function;
}

export const useScheduler = function (type: string) {
  let schedulerQueueReference = useRef([] as Job[]);
  const getSchedulerQueue = () => schedulerQueueReference.current;
  const schedulePostDispatchEvents = useCallback(
    ({ execute, context = {} }: { execute: Function; context?: any }) => {
      let notySchedulerQueue = getSchedulerQueue();
      let jobId = Math.floor(Math.random() * 100000);
      const scheduledJob: Job = {
        schedulerId: jobId,
        execute,
        type,
        context,
        unschedule: function () {
          let index = notySchedulerQueue.findIndex(
            (event: Job) => event.schedulerId === this.schedulerId
          );
          index !== -1 && notySchedulerQueue.splice(index, 1);
        },
      };
      notySchedulerQueue.push(scheduledJob);
      schedulerQueueReference.current = notySchedulerQueue;
      return scheduledJob;
    },
    [type]
  );

  return { schedulePostDispatchEvents, queue: getSchedulerQueue };
};

export const useProcessJobQueue = (
  getSchedulerQueue: () => Job[],
  type: string
) => {
  const fn = useCallback(
    (type: string) => {
      const queue = getSchedulerQueue();
      if (queue.length === 0) {
        return;
      }
      let jobsToUnschedule = queue
        .filter((e) => e.type === type)
        .map((event) => {
          event.execute();
          console.log(`useProcessJobQueue: job ${event.schedulerId} executed`);
          return event;
        });
      jobsToUnschedule.forEach((event: Job) => {
        const unschedule = event.unschedule.bind(event);
        unschedule();
      });
    },
    [getSchedulerQueue]
  );

  useEffect(function eventProcessingQueue() {
    console.log(`useProcessJobQueue: Executing jobs for ${type}`);
    fn(type);
  });
};
