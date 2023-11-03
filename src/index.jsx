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
        <Route path="/abc/:slug?/:id?" Component={Abc} />
        <Route path="/abc/:slug?" Component={Abc} />
        <Route path="/abc" Component={Abc} />
        <Route path="/" Component={App} exact />
        <Route path="*" Component={Page404} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
