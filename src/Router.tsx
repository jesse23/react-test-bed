import { useState, useEffect, Suspense, lazy, createElement } from "react";
import { RoutePage } from "./pages/RouterPage";
import { MyComponent } from "./pages/ops/MyComponent";

const ROUTES: Record<string, JSX.ElementType> = {
  grid: lazy(() => import("./pages/GridSamplePage")),
  ops: lazy(() => import("./pages/OpsSamplePage")),
};

const Router = () => {
  /*
  state is not working in static host without server side config, disable it for now.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  */
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.replace(/^#\//, "")
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.replace(/^#\//, ""));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (!currentPath) {
    return <RoutePage routes={ROUTES} />;
  } else if (ROUTES[currentPath]) {
    return (
      <Suspense>
        {createElement(ROUTES[currentPath])}
      </Suspense>
    );
  // TODO: hard code for ops, need improvement
  } else if (currentPath === "ops_iframe") {
    return <MyComponent id='iframe-component-sample' />;
  } else if (currentPath === "ops_popup") {
    return <MyComponent id='popup-component-sample' />;
  }else {
    window.location.href = "/";
  }
};

export default Router;
