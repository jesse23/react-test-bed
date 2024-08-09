import { useState } from "react";
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

// child component will lost the state
function TestPortal({
  children,
  enablePortal,
  parentElemId,
}: {
  children: React.ReactNode;
  enablePortal: boolean;
  parentElemId: string;
}) {
  return enablePortal
    ? document.getElementById(parentElemId) &&
        ReactDOM.createPortal(
          children,
          (document.getElementById(parentElemId) as HTMLElement) ||
            document.body
        )
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

  return (
    <TestPortal enablePortal={enablePortal} parentElemId={parentElemId}>
      <ChildComponent parentCount={count} setParentCount={setCount} />
    </TestPortal>
  );
}

function PortalStateSamplePage() {
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

export default PortalStateSamplePage;
