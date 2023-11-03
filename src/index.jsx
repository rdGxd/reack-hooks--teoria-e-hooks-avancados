import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import "./index.css";
import { Abc } from "./templates/Abc";
import { App } from "./templates/App/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" Component={App} exact />
        <Route path="/abc/:slug?/:id?" Component={Abc} exact />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
