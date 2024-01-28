// Function to download a video
function downloadVideo(url) {
    const filename = url.split("/").pop();
    chrome.downloads.download({ url: url, filename: filename });
  }
  
  // Listen for messages from the content script
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "downloadVideo") {
      downloadVideo(request.url);
    }
  });
  