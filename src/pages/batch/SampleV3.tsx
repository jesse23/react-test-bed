import { useEffect, useState } from "react";
import { useDataProvider } from "./DataProvider";
import { useDynamicEffect } from "./libs/v3";

export function SampleV3() {
  const { getData, setData } = useDataProvider({ selected: 6 });
  const [selected, setSelected] = useState(getData().selected);

  useEffect(() => {
    setSelected(getData().selected);
  }, [getData]);

  return (
    <div>
      <h3>Sample V3 (by state update)</h3>
      <div>Current selection (by state): {getData().selected}</div>
      <div>Current selection (by action): {selected}</div>
      <button
        onClick={() => {
          Promise.resolve().then(() => {
            setData({ selected: 0 });
            // setSelected(getData().selected);
          });
        }}
      >
        Select None
      </button>
    </div>
  );
}

export function SampleV3HighOrderVersion() {
  const { getData, setData } = useDataProvider({ selected: 6 });
  const [selected, setSelected] = useState(getData().selected);
  const { addEffect, removeEffect } = useDynamicEffect();

  return (
    <div>
      <h3>Sample V3 (by state update)</h3>
      <div>Current selection (by state): {getData().selected}</div>
      <div>Current selection (by action): {selected}</div>
      <button
        onClick={() => {
          Promise.resolve().then(() => {
            setData({ selected: 0 });
            // NOTE: this is just for mimic v2 behavior, it is not the ideal solution
            // if we really need high order version, we should do it at initialization by just one time.
            // 99% of the time, we don't need to do this.
            const effect = addEffect(() => {
              setSelected(getData().selected);
              return () => {
                removeEffect(effect);
              };
            }, [getData]);
          });
        }}
      >
        Select None
      </button>
    </div>
  );
}

export default SampleV3;