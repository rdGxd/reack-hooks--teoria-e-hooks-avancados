import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import "./index.css";
import { Page404 } from "./templates/Page404";
import { Abc } from "./templates/Abc";
import { App } from "./templates/App/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/abc/:slug?/:id?" Component={Abc} exact />
        <Route path="/" Component={App} exact />
        <Route path="*" Component={Page404} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
