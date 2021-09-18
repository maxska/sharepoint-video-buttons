chrome.browserAction.onClicked.addListener(extensionIconClicked);

const extensionIconClicked = (tab) => {
  chrome.tabs.sendMessage(tab.id, undefined); // send an empty message to the tab
}
