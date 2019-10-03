function runTheEdit() {
    // Get the current tab (active one)
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        // Execute the script on the current tab ( The one the use is actually on)
        chrome.tabs.executeScript(tab.id, {
          code: "document.designMode = 'on'"
        });
      });
}

// When you click on the icon
chrome.browserAction.onClicked.addListener(function() {
    runTheEdit();
});
