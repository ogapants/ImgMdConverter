function convert(selectionText) {
  if (selectionText == null || selectionText == "") {
    convertAll();
  } else {
    convertSelectionText(selectionText);
  }
}

function convertAll() {
  console.log("todo");
}

function convertSelectionText(selectionText) {
  var current = document.activeElement;
  current.value = current.value.replace(
    selectionText,
    convertToTag(selectionText)
  );
  //fixme: newline support
}

function convertToTag(selectionText) {
  return selectionText.replace(
    /!\[(.*)\]\((.+)\)/,
    '<img src="$2" width="300" alt="$1">'
  );
}

// Receive event from background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case "ImgMdConverter":
      convert(request.data);
      break;
    default:
      sendResponse();
      break;
  }
});
