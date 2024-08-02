import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface GridProps {
  itemMaxWidth: number;
  itemAspectRatio: number;
  layout: {
    [colCount: number]: string[][];
  };
}

interface GridContainerProps {
  itemMaxWidth: number;
  itemCols: number;
}

interface GridItemProps extends GridContainerProps {
  itemAspectRatio: number;
  colSpan: number;
  rowSpan: number;
}

// Debounce function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T {
  let timeout: number | undefined;
  return function (...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  } as T;
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(${(props) => props.itemCols}, 1fr);
`;

const GridItem = styled.div<GridItemProps>`
  display: flex;
  position: relative;
  grid-row: span ${(props) => props.rowSpan};
  grid-column: span ${(props) => Math.min(props.colSpan, props.itemCols)};
  aspect-ratio: ${(props) =>
    (props.colSpan * props.itemAspectRatio) / props.rowSpan};
`;

const GridItemContentExample = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ccc;
`;

export const Grid = ({ itemMaxWidth, itemAspectRatio, layout }: GridProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [adjustRatio, setAdjustRatio] = useState(1);

  // TODO - don't want to support multiple for now.
  const [initCols, data] = layout ? Object.entries(layout)[0] : [0, []];

  const [cols, setCols] = useState(Number(initCols));
  // const [containerHeight, setContainerHeight] = useState('100%');

  const [positions, setPositions] = useState<
    Record<
      string,
      { rowStart: number; colStart: number; rowSpan: number; colSpan: number }
    >
  >({});

  useEffect(() => {
    const positions = {} as Record<
      string,
      { rowStart: number; colStart: number; rowSpan: number; colSpan: number }
    >;
    data.forEach((row: string[], rowIndex: number) => {
      row.forEach((item: string, colIndex: number) => {
        if (item && !positions[item]) {
          const colSpan = row.filter((el) => el === item).length;
          const rowSpan = data.filter((r) => r[colIndex] === item).length;
          positions[item] = {
            rowStart: rowIndex + 1,
            colStart: colIndex + 1,
            rowSpan,
            colSpan,
          };
        }
      });
    });
    setPositions(positions);
  }, [data]);

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        console.log(entry);
        if (entry.contentBoxSize) {
          const { inlineSize: width } =
            entry.contentBoxSize[0] || entry.contentBoxSize;
          console.log("containerWidth", width);
          // minus padding
          const height =
            entry.contentBoxSize[1]?.blockSize || entry.contentRect.height;
          console.log("containerHeight", height);

          // const cssWidth = width / window.devicePixelRatio;
          const cssWidth = width;
          // const cssHeight = height / window.devicePixelRatio;
          const cssHeight = height;

          const scrollHeight = containerRef.current?.scrollHeight || 0;
          const clientHeight = containerRef.current?.clientHeight || 0;
          console.log("clientHeight", clientHeight);
          console.log("ParentClientHeight", containerRef.current?.parentElement?.clientHeight);
          console.log("scrollHeight", scrollHeight);

          /*
          we can do different behavior if we want
          if (Math.floor(scrollHeight) <= Math.ceil(clientHeight) && scrollHeight <= containerRef.current?.parentElement?.clientHeight) {
            setContainerHeight('unset');
          } else {
           */
           
            const colCount = Math.floor(cssWidth / itemMaxWidth);
            const cellWidth = cssWidth / colCount;
            console.log("cellWidth", cellWidth);

            const cellHeight = cellWidth / itemAspectRatio;
            console.log("cellHeight", cellHeight);

            const rowCount = Math.round(cssHeight / cellHeight);
            console.log("rowCount", rowCount);

            const projectCellHeight = cssHeight / rowCount;
            console.log("projectCellHeight", projectCellHeight);

            const adjustRatio = cellHeight / projectCellHeight;

            setAdjustRatio(adjustRatio);

            console.log("colCount", colCount);
            setCols(colCount);
            //setContainerHeight('100%');
          /*
          }
          */
        }
      }
    },
    [itemMaxWidth, itemAspectRatio]
  ); // Dependency array to include props that affect the resize logic

  const handleResizeDebounce = useCallback(debounce(handleResize, 100), [
    handleResize,
  ]); // Debounce with dependency

  // Generate the grid items
  const gridItems = [] as React.ReactNode[];

  // handle container size change
  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResizeDebounce);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
    // TODO: watch prop change
  }, [handleResizeDebounce]);

  Object.entries(positions).forEach(
    ([item, { rowStart, colStart, rowSpan, colSpan }]) => {
      const key = `${item}-${rowStart}-${colStart}`;
      gridItems.push(
        <GridItem
          key={key}
          colSpan={colSpan}
          rowSpan={rowSpan}
          itemCols={cols}
          itemMaxWidth={itemMaxWidth}
          itemAspectRatio={itemAspectRatio * adjustRatio}
        >
          <div
            style={{
              display: "flex",
              margin: "10px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <GridItemContentExample>
              <span
                style={{
                  position: "absolute",
                  fontSize: "36px",
                  margin: "20px",
                }}
              >
                {item}
              </span>
            </GridItemContentExample>
          </div>
        </GridItem>
      );
    }
  );

  return (
    <GridContainer
      itemMaxWidth={itemMaxWidth}
      itemCols={cols}
      ref={containerRef}
    >
      {gridItems}
    </GridContainer>
  );
};