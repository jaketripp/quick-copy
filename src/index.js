import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// styles
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";
import "typeface-roboto";
import "./styles/main.scss";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);