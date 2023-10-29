const options = {
  type: "basic",
  title: "Blink Alert! - Take a break",
  message:
    "Look away from your computer for 20 seconds. (click here to take full exercise)",
  iconUrl: "../images/eyeIcon_128.png",
};

let selectedDuration;
let intervalId;
let showAlert = false;

const createNotification = () => {
  if (showAlert) {
    chrome.notifications.create(options);
  }
};

const createExerciseTab = () => {
  chrome.tabs.create({ url: "exercise.html" });
};

chrome.notifications.onClicked.addListener(createExerciseTab);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.updateInterval) {
    chrome.storage.local.get("duration", ({ duration }) => {
      selectedDuration = Number(duration) || 1200000;

      if (intervalId) {
        clearInterval(intervalId);
      }
      if (showAlert) {
        intervalId = setInterval(createNotification, selectedDuration);
      }
    });

    if (message.showAlert !== undefined) {
      showAlert = message.showAlert;
    }
  }
});

chrome.storage.local.get("showAlert", ({ showAlert: storedShowAlert }) => {
  showAlert = storedShowAlert !== false;
  if (showAlert) {
    chrome.storage.local.get("duration", ({ duration }) => {
      selectedDuration = Number(duration) || 1200000;
      intervalId = setInterval(createNotification, selectedDuration);
    });
  }
});

/* Using the latest manifest v3, chrome intentionally removed persistent background script activities on service workers, this renders the bacground script inactive after 10 minutes (5 seconds for inactive windows), the logic below keeps chrome running by getting the platform info every few seconds. There are more recommended number of ways to keep your background script active here https://stackoverflow.com/questions/66618136/persistent-service-worker-in-chrome-extension  */
const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20e3);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();
