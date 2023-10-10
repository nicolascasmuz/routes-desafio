import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { Home } from "pages/Home";
import { SearchResults } from "pages/SearchResults";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}
