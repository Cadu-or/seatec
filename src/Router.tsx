import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register/Register"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}