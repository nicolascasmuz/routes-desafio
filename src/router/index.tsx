import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Layout } from "components/Layout";
import { Home } from "pages/Home";
import { SearchResults } from "pages/SearchResults";

export const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search/:query",
        element: <SearchResults />,
      },
    ],
  },
]);

/* export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Route>
    </Routes>
  );
} */
