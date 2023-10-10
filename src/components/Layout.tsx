import React from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../components/SearchForm";

export function Layout() {
  return (
    <div className="app-container">
      <header className="header">
        <SearchForm />
      </header>
      <Outlet />
      <footer className="footer"></footer>
    </div>
  );
}
