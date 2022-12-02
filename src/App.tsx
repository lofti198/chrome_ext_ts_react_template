///<reference types="chrome"/>
import logo from "./logo.svg";
import AppCSS from "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { useInjection } from "./hooks/useInjection";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
import TabPanel, { a11yProps, useStyles } from "./components/TabPanel";

import { getCurrentDomain } from "./libs/misc";
import { presets } from "./data";
import TopBar from "./components/TopBar";
import { useListeners } from "./hooks/useListeners";
import useInterval from "./hooks/useInterval";

import Draggable from "react-draggable"; // The default

function getLogo() {
  if (window.chrome) {
    return window.chrome.runtime.getURL(logo);
  }

  return logo;
}

function App() {
  const [valueTabSelected, setValueTabSelected] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [doOnLoad, setDoOnLoad] = useState(false);
  const doOnLoadRef = useRef<boolean>();

  useInjection();
  useListeners(setVisible);

  useEffect(() => {
    chrome.storage.sync.get(["panel-visible"], function (data) {
      if (!data || data["panel-visible"] === undefined) setVisible(true);
      else {
        // setVisible(false);
        // return;
        setVisible(data["panel-visible"]);
        if (!data["panel-visible"]) return;
      }
    });

    setTimeout(() => {
      // console.log("collect all aut", dataFields);
      // collectAllHandler();
    }, 500);
  }, []);

  useInterval(
    async () => {
      // if (doOnLoad) doHandler(true);
    },
    1000,
    true
  );

  useEffect(() => {
    chrome.storage.sync.set({ "panel-visible": visible }, function () {
      // document.dispatchEvent(new CustomEvent("panel_visible"));
    });
  }, [visible]);

  const closeHandler = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (valueTabSelected === 0) {
    } else if (valueTabSelected === 1) {
    } else throw Error("unpredicted mode");
  }, [valueTabSelected]);

  return (
    <>
      <style>{AppCSS}</style>
      {visible && (
        <>
          <Draggable enableUserSelectHack={false}>
            <div className="App">
              <TopBar
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                closeHandler={closeHandler}
              />
            </div>
          </Draggable>
        </>
      )}
    </>
  );
}

export default App;
