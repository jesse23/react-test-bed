// Render react to custom element
import React from "react";
import { createRoot, Root } from "react-dom/client";
import MyComponent from "./MyComponent";

class MyComponentElement extends HTMLElement {
  private _root: Root;

  constructor() {
    super();
    this._root = createRoot(this);
  }

  connectedCallback() {
    this._root.render(React.createElement(MyComponent, { id: this.id }));
  }

  disconnectedCallback() {
    this._root.unmount();
  }
}

customElements.define("my-component", MyComponentElement);
