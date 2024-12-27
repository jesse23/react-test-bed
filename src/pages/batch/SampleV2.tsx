import { useEffect, useState } from "react";
import { useDataProvider } from "./DataProvider";
import { useDeferJobQueue } from "./libs/v2";

export function SampleV2() {
  const { getData, setData } = useDataProvider({ selected: 6 });
  const [selected, setSelected] = useState(getData().selected);
  const { defer } = useDeferJobQueue();

  useEffect(() => {
    Promise.resolve().then(() => {
      if (getData().selected === 0) {
        // issue for v1: this schedule will not be executed
        defer({
          execute: () => {
            console.log("Job (schedule in use effect promise) executed");
          },
        });
      }
    });
  }, [getData().selected]);

  return (
    <div>
      <h3>Sample V2 (by fixed DeferJobQueue Polyfill)</h3>
      <div>Current selection (by state): {getData().selected}</div>
      <div>Current selection (by action): {selected}</div>
      <button
        onClick={() => {
          Promise.resolve().then(() => {
            setData({ selected: 0 });
            defer({
              execute: () => {
                setSelected(getData().selected);
              },
            });
          })
          .then(() => {
            return fetch("/");
          }).then(() => {
              defer({
                execute: () => {
                  console.log("Job (schedule in action promise) executed");
                },
              });
          });

          setTimeout(
            () =>
              defer({
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

export default SampleV2;
