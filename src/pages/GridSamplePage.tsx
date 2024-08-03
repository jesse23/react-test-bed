import { useEffect, useState } from "react";
import { Grid, GridProps, CodeFlaskEditor } from "../components";

const DEFAULT_GRID_PROPS = `
{
    "itemMaxWidth": 300,
    "itemAspectRatio": 1.33,
    "layout": {
        "3": [
            ["A", "B", "C"],
            ["D", "E", "E"],
            ["D", "F", "G"]
        ]
    }
}
`.trim();

export const GridSamplePage = () => {
  const [code, setCode] = useState(DEFAULT_GRID_PROPS);
  const [config, setConfig] = useState({} as GridProps);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      console.log("code", code);
      console.log("JSON.parse(code)", JSON.parse(code));
      setConfig(JSON.parse(code));
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  }, [code]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        id="primary"
        style={{
          flexGrow: 1,
        }}
      >
        {/*scrollbar deserve 20*/}
        <div
          style={{
            height: 600,
            width: 1020,
            overflowY: "scroll",
            overflowX: "hidden",
            resize: "both",
            border: "1px solid black",
          }}
        >
          { config && <Grid {...config} /> }
        </div>
        <div style={{
          color: "red",
        }}>{error}</div>
      </div>
      <div
        id="secondary"
        style={{
          borderTop: "1px solid black",
          height: "20%",
        }}
      >
        {" "}
        <CodeFlaskEditor
          code={code}
          type="js"
          onChange={setCode}
        />
      </div>
    </div>
  );
};

export default GridSamplePage;