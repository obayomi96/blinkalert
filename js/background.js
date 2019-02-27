// // Chrome notification API
const options = {
  type: "basic",
  title: "Blink Alert! - Its been 20 minutes!",
  message:
    "Look Away From Your Computer, Look at something 20 feets away for 20 seconds. (CLICK HERE TO TAKE EXERCISE)",
  iconUrl: "images/eyeIcon_128.png"
};

// Create notifications every 20 minutes 1200000 millisecons
setInterval(function() {
  chrome.notifications.create(options)
}, 1200000);

// Create a new tab onclick of notification
chrome.notifications.onClicked.addListener(function() {
  chrome.tabs.create({url: "exercise.html"});
});