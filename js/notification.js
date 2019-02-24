// // Chrome notification API
const options = {
  type: "basic",
  title: "Blink Alert! - Its been 20 minutes!",
  message:
    "Look Away From Your Computer, Look at something 20 feets away for 20 seconds. (BLINK AS MANY TIMES AS YOU CAN)",
  iconUrl: "images/eyeIcon_128.png"
};

setInterval(function() {
  chrome.notifications.create(options)
}, 1200000); // Create notifications every 20 minutes