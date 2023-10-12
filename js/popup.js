// // Chrome notification API
const options = {
  type: "basic",
  title: "Blink Alert! - It's time to take your break!",
  message:
    "Look away from your Computer, Look at something 20 feet away for 20 seconds. (CLICK HERE TO TAKE EXERCISE)",
  iconUrl: "images/eyeIcon_128.png",
};

let selectedDuration;

let timerId;

const countdown = (elementName, minutes, seconds) => {
  let element = document.getElementById(elementName);
  if (!element) {
    console.error(`Element with ID '${elementName}' not found.`);
    return;
  }

  clearTimeout(timerId);

  let endTime = +new Date() + 1000 * (60 * minutes + seconds);

  const twoDigits = (n) => {
    return n <= 9 ? "0" + n : n;
  };

  const updateTimer = () => {
    const msLeft = endTime - +new Date();
    if (msLeft < 1000) {
      element.innerHTML = "Take a break";
    } else {
      const time = new Date(msLeft);
      const hours = time.getUTCHours();
      const mins = time.getUTCMinutes();
      element.innerHTML =
        (hours ? minutes + ":" + twoDigits(mins) : mins) +
        ":" +
        twoDigits(time.getUTCSeconds());
      timerId = setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  };

  updateTimer();
};

const durationBtn1 = document.getElementById("durationBtn1");
const durationBtn2 = document.getElementById("durationBtn2");
const durationBtn3 = document.getElementById("durationBtn3");

const checkSelectedBtn = (value) => {
  if (value === "1200000") {
    durationBtn1.classList.add("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
    countdown("popup-timer", 0, 1200000);
  } else if (value === "3600000") {
    durationBtn2.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
    countdown("popup-timer", 0, 3600000);
  } else if (value === "7200000") {
    durationBtn3.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    countdown("popup-timer", 59, 7200000);
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
