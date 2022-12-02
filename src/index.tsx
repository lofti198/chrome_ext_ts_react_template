import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import createCache from "@emotion/cache";
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";

const body = document.querySelector("body");

const app = document.createElement("div");

app.id = "chrome_picker";
app.classList?.add("chrome_picker");
// Make sure the element that you want to mount the app to has loaded. You can
// also use `append` or insert the app using another method:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods
//
// Also control when the content script is injected from the manifest.json:
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
if (body) {
  body.prepend(app);
}

const container = document.getElementById("chrome_picker");
const shadowContainer = container?.attachShadow({ mode: "open" });
const emotionRoot = document.createElement("style");
const shadowRootElement = document.createElement("div");
shadowRootElement.classList?.add("chrome_picker-container");
shadowContainer?.appendChild(emotionRoot);
shadowContainer?.appendChild(shadowRootElement);

const cache = createCache({
  key: "css",
  prepend: true,
  container: emotionRoot,
});

const shadowTheme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
  },
});

ReactDOM.createRoot(shadowRootElement).render(
  <CacheProvider value={cache}>
    <ThemeProvider theme={shadowTheme}>
      <App />
    </ThemeProvider>
  </CacheProvider>
);
