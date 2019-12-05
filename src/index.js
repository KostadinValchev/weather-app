import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-4-react/dist/bootstrap-4-react";
import * as serviceWorker from "./serviceWorker";
import WeatherProvider from "./provider/weatherProvider";
import CookieUtil from "./utility/CookieUtil";
import "./fontawesome";
const provider = new WeatherProvider();
const cookies = new CookieUtil();
const props = {
  provider,
  cookies
};
ReactDOM.render(
  <BrowserRouter>
    <App {...props} />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
