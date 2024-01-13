import { createGlobalStyle } from "styled-components";
import "../css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
  }

  .icon-wrapper {
        display: "flex";
        align-items: "center";
        justify-content: "center";
        height: 100%;
    }
`;
