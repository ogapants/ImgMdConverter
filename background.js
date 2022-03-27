// Setting right click menu
chrome.contextMenus.create({
  id: "ImgMdConverter",
  title: "Convert ![]() to <img>",
  type: "normal",
  contexts: ["selection", "editable"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "ImgMdConverter") {
    chrome.tabs.sendMessage(tab.id, {
      type: "ImgMdConverter",
      data: info.selectionText,
    });
  }
});
