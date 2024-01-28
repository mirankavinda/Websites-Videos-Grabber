// Function to download a video
function downloadVideo(url) {
    chrome.runtime.sendMessage({ type: "downloadVideo", url: url });
  }
  
  // Get all video elements on the page and download them
  function downloadAllVideos() {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      const videoUrl = video.src;
      downloadVideo(videoUrl);
    });
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "downloadAllVideos") {
      downloadAllVideos();
    }
  });
  
  // Trigger the download when the content script is injected
  downloadAllVideos();
  