// Chrome notification API
const options = {
  type: "basic",
  title: "Blink Alert! - Take a break",
  message:
    "Look away from your computer for 20 seconds. (click here to take full exercise)",
  iconUrl: "../images/eyeIcon_128.png",
};

let selectedDuration;
let intervalId;

const createNotification = () => {
  chrome.notifications.create(options);
};

const createExerciseTab = () => {
  chrome.tabs.create({ url: "exercise.html" });
};

chrome.notifications.onClicked.addListener(createExerciseTab);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.updateInterval) {
    chrome.storage.local.get("duration", ({ duration }) => {
      selectedDuration = duration;
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = setInterval(createNotification, +selectedDuration);
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  // Set an initial alarm when the extension is installed or updated
  chrome.storage.local.get("duration", ({ duration }) => {
    selectedDuration = duration;
    intervalId = setInterval(createNotification, +selectedDuration);
  });
});

const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20e3);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();
