import { useState } from "react";
import { useDataProvider } from "./libs/v4";

export function SampleV4() {
  const { getData, setData } = useDataProvider({ selected: 6 });
  const [selected, setSelected] = useState(getData().selected);

  return (
    <div>
      <h3>Sample V4 (by agnostic state)</h3>
      <div>Current selection (by state): {getData().selected}</div>
      <div>Current selection (by action): {selected}</div>
      <button
        onClick={() => {
          Promise.resolve().then(() => {
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

export default SampleV4;
