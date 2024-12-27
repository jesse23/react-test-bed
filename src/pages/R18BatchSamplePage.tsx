import ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom";
import { useState, createElement } from "react";
import { RadioButtonGroup } from "./batch/RadioButtonGroup";
import { SampleV0 } from "./batch/SampleV0";
import { SampleV1 } from "./batch/SampleV1";
import { SampleV2 } from "./batch/SampleV2";
import { SampleV3 } from "./batch/SampleV3";
import { SampleV4 } from "./batch/SampleV4";

const R18_BATCH_SAMPLE_LOADER = "r18-batch-sample-loader-element";

function R18BatchSample() {
  const [version, setVersion] = useState("V0");
  return (
    <div>
      <h1>React18 Batch Adjustment Sample</h1>
      <RadioButtonGroup
        options={["V0", "V1", "V2", "V3", "V4"]}
        onChange={(v: string) => setVersion(v)}
      />
      {version === "V0" && <SampleV0 />}
      {version === "V1" && <SampleV1 />}
      {version === "V2" && <SampleV2 />}
      {version === "V3" && <SampleV3 />}
      {version === "V4" && <SampleV4 />}
    </div>
  );
}

// custom element loader to support switching between compatible mode and concurrent mode
customElements.define(R18_BATCH_SAMPLE_LOADER, class extends HTMLElement {
  private _root: ReactDOMClient.Root | null = null;
  private _reactRootElem: HTMLDivElement | null = null;

  _unmountReactComponent() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    } else {
      ReactDOM.unmountComponentAtNode(this._reactRootElem!);
    }
  }

  _mountReactComponent(compatibleMode: boolean) {
    if (compatibleMode) {
      ReactDOM.render(
        createElement(R18BatchSample),
        this._reactRootElem!
      );
    } else {
      this._root = ReactDOMClient.createRoot(this._reactRootElem!);
      this._root.render(createElement(R18BatchSample));
    }
  }

  connectedCallback() {
    // Create mode option check box
    const modeOptionElem = document.createElement("input");
    modeOptionElem.type = "checkbox";
    modeOptionElem.checked = false;
    modeOptionElem.addEventListener("change", () => {
      this._unmountReactComponent();
      this._mountReactComponent(modeOptionElem.checked);
    });
    this.appendChild(modeOptionElem);
    this.appendChild(document.createTextNode("Compatible Mode"));

    // Create react root element
    const reactRootElem = document.createElement("div");
    this.appendChild(reactRootElem);
    this._reactRootElem = reactRootElem;

    // Mount react component
    this._mountReactComponent(false);
  }

  disconnectedCallback() {
    this._unmountReactComponent();
    this._reactRootElem = null;
    this._root = null;
  }
});

// react loader
function R18BatchSamplePage() {
  return createElement(R18_BATCH_SAMPLE_LOADER);
}

export default R18BatchSamplePage;