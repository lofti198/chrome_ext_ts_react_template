chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.create) {
    chrome.tabs.create(request.create);
  } else if (request.focus) {
    chrome.windows.update(
      sender.tab.windowId,
      { focused: true },
      function (window) {}
    );
    chrome.tabs.update(sender.tab.id, { active: true }, function (tab) {});
  }

  response = { message: "download success" };
});

chrome.action.onClicked.addListener(() => {
  sendMessageToContentScriptActiveTab("show_main_panel_message");
});

const sendMessageToContentScriptActiveTab = async (message, data) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { command: message, data },
      function (response) {
        // console.log(response.status);
      }
    );
  });
};

// ###############
/*
 * bg.js -- a ManifestV3 service_worker that installs a context menu
 *          plus minimal framework for messaging between here and
 *          a content script.
 */
chrome.runtime.onInstalled.addListener(function () {
  const topMenuItem = chrome.contextMenus.create({
    id: "cm-top",
    title: "EXT_NAME",
    contexts: ["all"],
  });

  chrome.contextMenus.create({
    id: "EXT_NAME_cm_point",
    title: "Bla",
    contexts: ["all"],
    parentId: topMenuItem,
  });

  chrome.contextMenus.onClicked.addListener((info, tabs) => {
    switch (info.menuItemId) {
      case "EXT_NAME_cm_point":
        sendMessageToContentScriptActiveTab("EXT_NAME_cm_point__clicked");
        break;

      default:
        //TODO: throw error to context
        break;
    }
  });
});
