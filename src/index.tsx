import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { indexRouter } from "router";

/* const domNode = document.getElementById("root");
let root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
); */

const newRoot = ReactDOM.createRoot(document.getElementById("root"));
newRoot.render(
  <React.StrictMode>
    <RouterProvider router={indexRouter} />
  </React.StrictMode>
);
