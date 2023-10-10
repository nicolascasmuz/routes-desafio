import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "router";

const domNode = document.getElementById("root");
let root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
