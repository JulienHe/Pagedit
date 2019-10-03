function display_h1 (results){
    console.log('Enjoy!')
  }

function openRoom() {
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        tab_title = tab.title;
        chrome.tabs.executeScript(tab.id, {
          code: `document.designMode = 'on'`
        }, display_h1);
      });
}
document.addEventListener("DOMContentLoaded", function() {
    openRoom();
});
