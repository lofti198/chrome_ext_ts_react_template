export const injectOnPageLoad = () => {
  const shadowDom = document.getElementById("chrome_picker");
  var script = document.createElement("script");
  script.src = chrome.runtime.getURL("injectionScript.js");
  console.log(script.src);
  shadowDom?.shadowRoot?.appendChild(script);

  // var js = "alert('Hello, World!');"; // put your JS code here
  // var oScript = document.createElement("script");
  // var oScriptText = document.createTextNode(js);
  // oScript.appendChild(oScriptText);
  // shadowDom?.shadowRoot?.appendChild(oScript);
};
