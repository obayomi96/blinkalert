const checkSelectedBtn = (value) => {
  if (value === 1200000) {
    durationBtn1.classList.add("btnSelected");
    durationBtn2.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
  } else if (value === 3600000) {
    durationBtn2.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn3.classList.remove("btnSelected");
  } else if (value === 7200000) {
    durationBtn3.classList.add("btnSelected");
    durationBtn1.classList.remove("btnSelected");
    durationBtn2.classList.remove("btnSelected");
  }
};

const durationBtn1 = document.getElementById("durationBtn1");
const durationBtn2 = document.getElementById("durationBtn2");
const durationBtn3 = document.getElementById("durationBtn3");
const showAlertCheckbox = document.getElementById("showAlertCheckbox");

function updateNotificationSetting() {
  const showAlert = showAlertCheckbox.checked;
  chrome.storage.local.set({ showAlert });
  chrome.runtime.sendMessage({ updateInterval: true, showAlert });
}

showAlertCheckbox.addEventListener("change", updateNotificationSetting);

const setDuration = (value) => {
  chrome.storage.local.set({ duration: value }, () => {
    chrome.runtime.sendMessage({ updateInterval: true });
    checkSelectedBtn(value);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("duration", ({ duration }) => {
    setDuration(duration || 1200000);
  });

  chrome.storage.local.get("showAlert", ({ showAlert }) => {
    showAlertCheckbox.checked = showAlert !== false;
    updateNotificationSetting();
  });
});

durationBtn1.addEventListener("click", () => {
  setDuration(1200000);
});

durationBtn2.addEventListener("click", () => {
  setDuration(3600000);
});

durationBtn3.addEventListener("click", () => {
  setDuration(7200000);
});
