import { useState } from "react";
import { useDataProviderV3 as useDataProvider } from "./DataProvider";

// r17
// - all setState will be executed immediately
// r18 compatible mode
// - setState in sync mode will be batched
// - setState in async mode will be executed immediately
// r18 concurrent mode
// - all setState will be batched

export function SampleV0({ concurrentMode = false }: { concurrentMode: boolean }) {
  const { getData, setData } = useDataProvider({ selected: 6 }, concurrentMode);
  const [selected, setSelected] = useState(getData().selected);

  return (
    <div>
      <h3>Sample V0 (No fix, show the symptom)</h3>
      <div>Current selection (by state): {getData().selected}</div>
      <div>Current selection (by action): {selected}</div>
      <button
        onClick={() => {
          Promise.resolve().then(() => {
            // if we flushSync to both, it is not working
            setData({ selected: 0 });
            setSelected(getData().selected);
          });
        }}
      >
        Select None
      </button>
    </div>
  );
}

export default SampleV0;
