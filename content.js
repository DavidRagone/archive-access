chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.url) {
    const archiveUrl = "http://archive.is/" + tab.url;
    chrome.tabs.update(tab.id, { url: archiveUrl });
  }
});

