// // Chrome notification API
const options = {
  type: "basic",
  title: "Blink Alert! - Its been 20 minutes!",
  message:
    "Look away from your Computer, Look at something 20 feet away for 20 seconds. (CLICK HERE TO TAKE EXERCISE)",
  iconUrl: "images/eyeIcon_128.png",
};

let selectedDuration;

const durationBtn1 = document.getElementById("durationBtn1");
const durationBtn2 = document.getElementById("durationBtn2");
const durationBtn3 = document.getElementById("durationBtn3");

const checkSelectedBtn = (value) => {
  if (value === "1200000") {
    durationBtn1.classList.add("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
  } else if (value === "3600000") {
    durationBtn2.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
  } else if (value === "7200000") {
    durationBtn3.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn2.classList.remove("btnSelected");
  }
};

chrome.storage.local.get("duration", ({ duration }) => {
  selectedDuration = duration || 1200000;
  checkSelectedBtn(duration);
});

durationBtn1.addEventListener("click", () => {
  chrome.storage.local.set({ duration: "1200000" }, () => {
    selectedDuration = 1200000;
  });
  chrome.storage.local.get("duration", ({ duration }) => {
    checkSelectedBtn(duration);
  });
});

durationBtn2.addEventListener("click", () => {
  chrome.storage.local.set({ duration: "3600000" }, () => {
    selectedDuration = 3600000;
  });
  chrome.storage.local.get("duration", ({ duration }) => {
    checkSelectedBtn(duration);
  });
});

durationBtn3.addEventListener("click", () => {
  chrome.storage.local.set({ duration: "7200000" }, () => {
    selectedDuration = 7200000;
  });
  chrome.storage.local.get("duration", ({ duration }) => {
    checkSelectedBtn(duration);
  });
});

setInterval(() => {
  chrome.notifications.create(options);
}, Number(selectedDuration) || 1200000);

// Create a new tab onclick of notification
chrome.notifications.onClicked.addListener(function () {
  chrome.tabs.create({ url: "exercise.html" });
});
