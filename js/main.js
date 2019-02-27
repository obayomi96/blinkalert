// Realtime Date function in header
function digitalClock() {
  const date = new Date();
  let hours = date.getHours() + "";
  let minutes = date.getMinutes() + "";
  let seconds = date.getSeconds() + "";
  const day = date.getDay();

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const clock = weekdays[day] + " " + hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerHTML = clock;
} // date function end
setInterval(digitalClock, 1000);

// 20 minutes countdown timer
function countdown(elementName, minutes, seconds) {
  let element, endTime, hours, mins, msLeft, time;
  // Make countdown double digits when less that 10
  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }
  // Timer counter update
  function updateTimer() {
    msLeft = endTime - +new Date();
    if (msLeft < 1000) {
      element.innerHTML = "Exercise Complete";
    } else {
      time = new Date(msLeft);
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML =
        (hours ? "0" + ":" + twoDigits(mins) : mins) +
        ":" + twoDigits(time.getUTCSeconds());
      setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }
  } // updateTimer function end

  element = document.getElementById(elementName);
  endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
} // countdown function end
countdown("countdown-timer", 0, 20);
