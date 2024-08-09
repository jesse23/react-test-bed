import { useState, createElement, useRef } from "react";
import { remoteApi, eventBus, useDynamicCss } from "../libs";
import MyComponent from "./ops/MyComponent";
import "./ops/my-component.directive";

eventBus.subscribe({
  topic: "selectionChanged",
  handler: (payload) => {
    console.log(`[page] Received parentSelectionChanged:`, payload);
  },
});

remoteApi.register({
  topic: "app-level-api",
  handler: async (payload: { message: string }) => {
    return { response: `app-level-api: ${payload.message}` };
  },
});

const OpsSamplePage = () => {
  useDynamicCss("./OpsSamplePage.css", "dynamic-css");

  const [iframeCompApiContent, setIframeCompApiContent] = useState(
    "Call component-level-api in iframe component"
  );
  const [webCompApiContent, setWebCompApiContent] = useState(
    "Call component-level-api in web component"
  );
  const [nativeCompApiContent, setNativeCompApiContent] = useState(
    "Call component-level-api in native component"
  );
  const [popupCompApiContent, setPopupCompApiContent] = useState(
    "Call component-level-api in popup component"
  );
  const popupWindowRef = useRef<Window | null>(null);

  return (
    <>
      <button
        style={{
          marginBottom: "10px",
        }}
        onClick={() => {
          // TODO: need a framework to track pop up window
          const popupWindow = window.open(
            "/#/ops_popup",
            "popupWindow",
            "width=600,height=600,resizable=yes,scrollbars=yes,status=no,toolbar=no,location=no,menubar=no"
          );
          popupWindowRef.current = popupWindow;
        }}
      >
        Open a popup window
      </button>
      <button
        style={{
          marginBottom: "10px",
        }}
        onClick={() => {
          remoteApi
            .callApi(
              {
                topic: "component-level-api",
                channel: "my-component-iframe-component-sample",
                payload: { message: "Hello, world!" },
              },
              (document.getElementById("iframe-sample") as HTMLIFrameElement)
                ?.contentWindow
            )
            .then((response) => {
              setIframeCompApiContent(JSON.stringify(response));
            })
            .catch((error) => {
              setIframeCompApiContent(JSON.stringify(error));
            });
        }}
      >
        {iframeCompApiContent}
      </button>
      <button
        style={{
          marginBottom: "10px",
        }}
        onClick={() => {
          remoteApi
            .callApi({
              topic: "component-level-api",
              channel: "my-component-web-component-sample",
              payload: { message: "Hello, world!" },
            })
            .then((response) => {
              setWebCompApiContent(JSON.stringify(response));
            })
            .catch((error) => {
              setWebCompApiContent(JSON.stringify(error));
            });
        }}
      >
        {webCompApiContent}
      </button>
      <button
        style={{
          marginBottom: "10px",
        }}
        onClick={() => {
          remoteApi
            .callApi({
              topic: "component-level-api",
              channel: "my-component-native-component-sample",
              payload: { message: "Hello, world!" },
            })
            .then((response) => {
              setNativeCompApiContent(JSON.stringify(response));
            })
            .catch((error) => {
              setNativeCompApiContent(JSON.stringify(error));
            });
        }}
      >
        {nativeCompApiContent}
      </button>
      <button
        style={{
          marginBottom: "10px",
        }}
        onClick={() => {
          remoteApi
            .callApi(
              {
                topic: "component-level-api",
                channel: "my-component-popup-component-sample",
                payload: { message: "Hello, world!" },
              },
              popupWindowRef.current
            )
            .then((response) => {
              setPopupCompApiContent(JSON.stringify(response));
            })
            .catch((error) => {
              setPopupCompApiContent(JSON.stringify(error));
            });
        }}
      >
        {popupCompApiContent}
      </button>
      <button
        style={{
          marginBottom: "100px",
        }}
        onClick={() => {
          eventBus.publish(
            {
              topic: "parentSelectionChanged",
              channel: "my-component-iframe-component-sample",
              payload: { component: "page", uid: "uid2" },
            },
            (document.getElementById("iframe-sample") as HTMLIFrameElement)
              ?.contentWindow
          );
        }}
      >
        Publish parentSelectionChanged event to iframe component
      </button>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <iframe
            id="iframe-sample"
            src="./#/ops_iframe"
            style={{
              width: "100%",
              height: "inherit",
              overflow: "hidden",
              border: "none",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          {createElement("my-component", { id: "web-component-sample" })}
        </div>
        <div
          id="native-component-sample"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <MyComponent id="native-component-sample" />
        </div>
      </div>
    </>
  );
};

export default OpsSamplePage;
