import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CssBaseline } from "@material-ui/core";

import Providers from "./providers";

ReactDOM.render(
  <Providers>
    <CssBaseline />

    <App />
  </Providers>,
  document.getElementById("root")
);

reportWebVitals();
