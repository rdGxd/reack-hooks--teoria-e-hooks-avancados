import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import "./index.css";
import { Abc } from "./templates/Abc";
import { App } from "./templates/App/index";
import { Page404 } from "./templates/Page404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/abc/:slug?/:id?" element={<Abc />} />
        <Route path="/abc/:slug?" element={<Abc />} />
        <Route path="/abc/" element={<Abc />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
