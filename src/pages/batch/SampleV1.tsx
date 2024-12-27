import { useState, useEffect } from "react";
import { useDataProvider } from "./DataProvider";
import { useProcessJobQueue, useScheduler } from "./libs/v1";

export function SampleV1() {
  const { getData, setData } = useDataProvider({ selected: 6 });
  const [selected, setSelected] = useState(getData().selected);
  const { schedulePostDispatchEvents, queue } = useScheduler("test");

  useEffect(() => {
    Promise.resolve().then(() => {
      if (getData().selected === 0) {
        // issue for v1: this schedule will not be executed
        schedulePostDispatchEvents({
          execute: () => {
            console.log("Job (schedule in use effect promise) executed");
          },
        });
      }
    });
  }, [getData().selected]);

  useProcessJobQueue(queue, "test");

  return (
    <div>
      <h3>Sample V1 (by DeferJobQueue Polyfill)</h3>
      <div>Current selection (by state): {getData().selected}</div>
      <div>Current selection (by action): {selected}</div>
      <button
        onClick={() => {
          Promise.resolve()
            .then(() => {
              setData({ selected: 0 });
              schedulePostDispatchEvents({
                execute: () => {
                  setSelected(getData().selected);
                },
              });
            })
            .then(() => {
              return fetch("/");
            })
            .then(() => {
              // issue for v1: this schedule will not be executed
              schedulePostDispatchEvents({
                execute: () => {
                  console.log("Job (schedule in action promise) executed");
                },
              });
            });

          // issue for v1: this schedule will not be executed
          setTimeout(
            () =>
              schedulePostDispatchEvents({
                execute: () => {
                  console.log("Job (schedule in action setTimeout) executed");
                },
              }),
            100
          );
        }}
      >
        Select None
      </button>
    </div>
  );
}

export default SampleV1;
