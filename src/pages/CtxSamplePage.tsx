import { useEffect, useState } from "react";
import { atom, eventBus, useAtom, useDynamicCss } from "../libs";

const someSharedStateAsAtom = atom("");

const LeafComponent = ({ scopeId }: { scopeId: string }) => {
  const [data, setData] = useState("");
  const [eventValue, setEventValue] = useState("");
  const [atomValue, setAtomValue] = useAtom(someSharedStateAsAtom);

  useEffect(() => {
    const subs = eventBus.subscribe({
      topic: "update.LeafComponent",
      channel: scopeId,
      handler: (val) => {
        setEventValue(val);
      },
    });
    return () => {
      eventBus.unsubscribe(subs);
    };
  }, []);

  return (
    <div
      style={{
        border: "1px solid white",
        margin: "10px",
        padding: "10px",
        width: "100%",
      }}
    >
      <div>Ctx: '{atomValue}'</div>
      <div>Data: '{data}'</div>
      <div>Event: '{eventValue}'</div>
      <button
        onClick={() =>
          eventBus.publish({
            topic: "update.LeafComponent",
            channel: scopeId,
            payload: `event from ${scopeId}`,
          })
        }
      >
        Update Event
      </button>
      <button onClick={() => setAtomValue("Hello")}>Update Ctx</button>
      <button onClick={() => setData("Hello")}>Update State</button>
    </div>
  );
};

const LeafComponentRow = ({ scopeId }: { scopeId: string }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* component that I want to reuse */}
      <LeafComponent scopeId={`${scopeId}:leftCell`} />
      {/* component that I don't want to reuse */}
      <LeafComponent scopeId="rightCell" />
    </div>
  );
};

const LeafComponentGrid = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LeafComponentRow scopeId="firstRow" />
      <LeafComponentRow scopeId="secondRow" />
    </div>
  );
};

const GlobalPanel = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid white",
        margin: "10px",
        padding: "10px",
      }}
    >
      <button
        onClick={() =>
          eventBus.publish({
            topic: "update.LeafComponent",
            channel: "firstRow:leftCell",
            payload: `event from firstRow:leftCell`,
          })
        }
      >
        Event to firstRow:leftCell
      </button>
      <button
        onClick={() =>
          eventBus.publish({
            topic: "update.LeafComponent",
            channel: "rightCell",
            payload: `event from rightCell`,
          })
        }
      >
        Event to rightCell
      </button>
    </div>
  );
};

export const CtxSamplePage = () => {
  useDynamicCss("./OpsSamplePage.css", "dynamic-css");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GlobalPanel />
      <LeafComponentGrid />
    </div>
  );
};

export default CtxSamplePage;
