const checkSelectedBtn = (value) => {
  if (value === 1200000) {
    durationBtn1.classList.add("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
    durationBtn4.classList.remove("btnSelected");
    durationBtn5.classList.remove("btnSelected");
    durationBtn6.classList.remove("btnSelected");
  } else if (value === 3600000) {
    durationBtn2.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
    durationBtn4.classList.remove("btnSelected");
    durationBtn5.classList.remove("btnSelected");
    durationBtn6.classList.remove("btnSelected");
  } else if (value === 7200000) {
    durationBtn3.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn4.classList.remove("btnSelected");
    durationBtn5.classList.remove("btnSelected");
    durationBtn6.classList.remove("btnSelected");
  } else if (value === 1080000) {
    durationBtn4.classList.add("btnSelected");
    durationBtn3.classList.remove("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn5.classList.remove("btnSelected");
    durationBtn6.classList.remove("btnSelected");
  } else if (value === 14400000) {
    durationBtn5.classList.add("btnSelected");
    durationBtn3.classList.remove("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn4.classList.remove("btnSelected");
    durationBtn6.classList.remove("btnSelected");
  } else if (value === 18000000) {
    durationBtn6.classList.add("btnSelected");
    durationBtn3.classList.remove("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn4.classList.remove("btnSelected");
    durationBtn5.classList.remove("btnSelected");
  }
};

const durationBtn1 = document.getElementById("durationBtn1");
const durationBtn2 = document.getElementById("durationBtn2");
const durationBtn3 = document.getElementById("durationBtn3");
const showAlertCheckbox = document.getElementById("showAlertCheckbox");
const durationSlider = document.getElementById("durationSlider");

const sliderValueToDuration = (sliderValue) => {
  if (sliderValue === "1") return 1200000; // 20 minutes
  if (sliderValue === "2") return 3600000; // 1 hour
  if (sliderValue === "3") return 7200000; // 2 hours
  if (sliderValue === "4") return 1080000; // 3 hours
  if (sliderValue === "5") return 14400000; // 4 hours
  if (sliderValue === "6") return 18000000; // 5 hours
};

function updateNotificationSetting() {
  const showAlert = showAlertCheckbox.checked;
  chrome.storage.local.set({ showAlert });
  chrome.runtime.sendMessage({ updateInterval: true, showAlert });
}

showAlertCheckbox.addEventListener("change", updateNotificationSetting);

durationSlider.addEventListener("input", () => {
  const sliderValue = durationSlider.value;
  const duration = sliderValueToDuration(sliderValue);
  setDuration(duration);
});

const setDuration = (value) => {
  chrome.storage.local.set({ duration: value }, () => {
    chrome.runtime.sendMessage({ updateInterval: true });
    checkSelectedBtn(value);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("duration", ({ duration }) => {
    durationSlider.value = durationToSliderValue(duration || 1200000);
    checkSelectedBtn(duration || 1200000);
  });

  chrome.storage.local.get("showAlert", ({ showAlert }) => {
    showAlertCheckbox.checked = showAlert !== false;
    updateNotificationSetting();
  });
});

durationBtn1.addEventListener("click", () => {
  setDuration(1200000);
  durationSlider.value = "1";
});
durationBtn2.addEventListener("click", () => {
  setDuration(3600000);
  durationSlider.value = "2";
});
durationBtn3.addEventListener("click", () => {
  setDuration(7200000);
  durationSlider.value = "3";
});
durationBtn3.addEventListener("click", () => {
  setDuration(1080000);
  durationSlider.value = "3";
});
durationBtn4.addEventListener("click", () => {
  setDuration(14400000);
  durationSlider.value = "5";
});
durationBtn5.addEventListener("click", () => {
  setDuration(18000000);
  durationSlider.value = "6";
});

// Function to convert duration to slider value
const durationToSliderValue = (duration) => {
  if (duration === 1200000) return "1"; // 20 minutes
  if (duration === 3600000) return "2"; // 1 hour
  if (duration === 7200000) return "3"; // 2 hours
  if (duration === 1080000) return "4"; // 3 hours
  if (duration === 14400000) return "5"; // 4 hours
  if (duration === 18000000) return "6"; // 5 hours
};
