import { useEffect, useRef, useState } from "react";
import { useDataProviderV3 as useDataProvider, useDataProviderV2 as useDp } from "./batch/DataProvider";
import { flushSync } from "react-dom";

// r17
// - all setState will be executed immediately
// r18 compatible mode
// - setState in sync mode will be batched
// - setState in async mode will be executed immediately
// r18 concurrent mode
// - all setState will be batched

function ParentComponent() {
    const parentConcurrentMode = true;
    const child1ConcurrentMode = true;
    const child2ConcurrentMode = false;
    // concurrent mode here
    const { getData, setData } = useDataProvider({ selected: 6 }, parentConcurrentMode);
    const [selected, setSelected] = useState(getData().selected);

    return (
        <div>
            <button
                onClick={() => {
                    Promise.resolve().then(() => {
                        // if we flushSync to both, it is not working
                        setData({ selected: 0 });
                        // assuming the data is updated.
                        setSelected(getData().selected);
                    });
                }}
            >
                Select None
            </button>
            <h3>Parent Component (concurrent={parentConcurrentMode.toString()})</h3>
            <div>Current selection (by state): {getData().selected}</div>
            <div>Current selection (by action): {selected}</div>
            <h3>Child Component 1 (by action, concurrent={child1ConcurrentMode.toString()})</h3>
            <ChildComponent parentSelected={getData().selected} concurrentMode={child1ConcurrentMode} />
            <h3>Child Component 2 (by action, concurrent={child2ConcurrentMode.toString()})</h3>
            <ChildComponent parentSelected={selected} concurrentMode={child2ConcurrentMode} />
        </div>
    );
}

const ChildComponent = ({ parentSelected, concurrentMode }: { parentSelected: number, concurrentMode?: boolean }) => {
    const selectedRef = useRef(parentSelected);
    const concurrentModeRef = useRef(concurrentMode);
    const [_, setSelected] = useState(parentSelected);
    const [parentSelectionDisplay, setParentSelectionDisplay] = useState(`${parentSelected} + 1`);

    // Update ref when concurrentMode changes
    concurrentModeRef.current = concurrentMode;

    const handleSelectedUpdate = (selected: number) => {
        setSelected(() => {
            // note: this line is wrong in concurrent mode
            selectedRef.current = selected;
            return selected;
        })
    }

    useEffect(() => {
        concurrentModeRef.current ? handleSelectedUpdate(parentSelected) : flushSync(() => handleSelectedUpdate(parentSelected));
        concurrentModeRef.current ? setParentSelectionDisplay(`${selectedRef.current} + 1`) : flushSync(() => setParentSelectionDisplay(`${selectedRef.current} + 1`));
    }, [parentSelected]); // removed concurrentMode from dependencies

    return (
        <div>Parent selection: {parentSelectionDisplay}</div>
    )
}

export const ReactUpgradeSample = () => {
    return (
            <ParentComponent />
    );
};

export default ReactUpgradeSample;
