chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		console.log("%cHello from Pagedit! \nClick on the extension icon to edit the page's text.\n🙌🔥😏🍕❤️💻🤓👨‍💻👩‍💻", "color: #84581f; text-shadow: 1px 1px #eacb9f; font-size:18px; ");
		// ----------------------------------------------------------

	}
	}, 10);
});
