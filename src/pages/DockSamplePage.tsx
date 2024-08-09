import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function ChildComponent({
  parentCount,
  setParentCount,
}: {
  parentCount: number;
  setParentCount: (value: number) => void;
}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Parent State: {parentCount}</p>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Plus Portal State
      </button>
      <p>Portal State: {count}</p>
      <button onClick={() => setCount(count + 1)}>Plus Portal State</button>
    </div>
  );
}

// child component will retain the state
function TestDock({
  children,
  enablePortal,
  parentElemId,
}: {
  children: React.ReactNode;
  enablePortal: boolean;
  parentElemId: string;
}) {
  const [containerElem, setContainerElem] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainerElem(document.createElement("div"));
    return () => {
      if(containerElem) {
        containerElem.parentElement?.removeChild(containerElem);
      }
      setContainerElem(null);
    }
  }, []);

  useEffect(() => {
    if (containerElem) {
      const parentElem = document.getElementById(parentElemId);
      parentElem?.appendChild(containerElem);

      return () => {
        parentElem?.removeChild(containerElem);
      };
    }
  }, [containerElem, parentElemId]);

  return enablePortal
    ? containerElem && ReactDOM.createPortal(children, containerElem)
    : children;
}

function ParentComponent({
  enablePortal,
  parentElemId,
}: {
  enablePortal: boolean;
  parentElemId: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [parentElemId]);

  return (
    <TestDock enablePortal={enablePortal} parentElemId={parentElemId}>
      <ChildComponent parentCount={count} setParentCount={setCount} />
    </TestDock>
  );
}

function DockSamplePage() {
  const [toSecContainer, setToSecContainer] = useState(false);

  return (
    <div>
      <h1>React Portal State Preservation</h1>
      <button onClick={() => setToSecContainer(!toSecContainer)}>
        Move Portal to {toSecContainer ? "First" : "Second"} Container
      </button>
      <div
        id="first-container"
        style={{ border: "1px solid black", padding: "10px" }}
      >
        <p>First Container</p>
      </div>
      <div
        id="second-container"
        style={{ border: "1px solid red", padding: "10px" }}
      >
        <p>Second Container</p>
      </div>
      <ParentComponent
        enablePortal={true}
        parentElemId={toSecContainer ? "second-container" : "first-container"}
      />
    </div>
  );
}

export default DockSamplePage;
