import React from "react";
import ReactDOMClient from "react-dom/client";
import Router from "./Router";

/*
const params = new URLSearchParams(window.location.search);
const useLegacy = params.get("r17") === '';
*/

ReactDOMClient.createRoot(document.getElementById("root")!).render(
    <Router />
);
