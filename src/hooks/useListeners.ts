import { useEffect } from "react";
import uniqid from "uniqid";

let clickedEl: any = null;

export function useListeners(setVisible: any) {
  useEffect(() => {
    document.addEventListener(
      "contextmenu",
      function (event) {
        clickedEl = event.target;
        console.log(event);

        //@ts-ignore
        //event.target.click();
      },
      true
    );

    chrome.runtime.onMessage.addListener(async function (
      request,
      sender,
      sendResponse
    ) {
      console.log("Request caught by onMessage: ", request);

      if (request.command === "show_main_panel_message") {
        setVisible(true);
      }

      sendResponse({ status: "done" });
    });
  }, []);
}
