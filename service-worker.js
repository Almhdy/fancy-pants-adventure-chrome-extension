const GAME_TAB_URL = chrome.runtime.getURL("game.html");
const SITE_URL = "https://unblocked-games.org/?utm_source=chrome_extension&utm_medium=install&utm_campaign=fancy_pants_unblocked";

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: GAME_TAB_URL });
});

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.create({ url: SITE_URL });
  }
});
