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

// Show alert box onclick of notification
// chrome.notifications.onClicked.addListener(function() {
//   alert('Look Away From Your Computer, Look at something 20 feets away for 20 seconds. (BLINK AS MANY TIMES AS YOU CAN)');
// });

/* ****MODIFICATIONS**** */
// const options = {
//   type: "basic",
//   title: "Blink Alert! - Its been 20 minutes!",
//   message:
//     "Look Away From Your Computer, Look at something 20 feets away for 20 seconds. (CLICK HERE TO TAKE EXERCISE)",
//   iconUrl: "images/eyeIcon_128.png"
// };

// // Create notifications every 20 minutes 1200000 millisecons
// // assign to a variable
// let myInterval;

// function notify() {
//   myInterval = setInterval(notification, 1200000);
// }
// notify();

// function notification() {
//   chrome.notifications.create(options);
// }
// // Create a new tab onclick of notification
// chrome.notifications.onClicked.addListener(function() {
//   // set time out to 20s,
//   // setTimeout(() => {
//   //   console.log('interval cleared, notification timer reset')
//   //   clearInterval(myInterval);
//   //   notify();
//   // }, 10000);
//   const clearNotification = () => clearTimeout(myInterval);
//   const clearTime = () => setTimeout(clearNotification, 500);
//   const startNotification = () => setTimeout(myInterval, 20000);
//   chrome.tabs.create({ url: "exercise.html" });
// });


/************************************ */

// let myInterval;

// function notify() {
//   myInterval = setInterval(notification, 20000);
// }
// notify();

// function notification() {
//   chrome.notifications.create(options);
// }
// // Create a new tab onclick of notification
// chrome.notifications.onClicked.addListener(function() {
//   // set time out to 20s,
//   setTimeout(() => {
//     console.log('interval cleared, notification timer reset')
//     clearInterval(myInterval);
//     notify();
//   }, 10000);
//   // const clearNotification = () => clearTimeout(myInterval);
//   // const clearTime = () => setTimeout(clearNotification, 500);
//   // const startNotification = () => setTimeout(myInterval, 20000);
//   chrome.tabs.create({ url: "exercise.html" });
// });