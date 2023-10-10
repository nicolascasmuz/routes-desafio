import React from "react";
import { useParams } from "react-router-dom";

export function SearchResults() {
  const params = useParams();

  return <div className="app-container">{JSON.stringify(params)}</div>;
}
