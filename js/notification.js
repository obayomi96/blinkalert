// Chrome notification API
const options = {
    type: "basic",
    title: "Blink Alert! - Its been 20 minutes!",
    message: "Look Awar From Your Computer, Look at something 20 feets away for 20 seconds",
    iconUrl: "images/eyeIcon_128.png"
  };
  chrome.notifications.create(options, function callback() {
    chrome.tabs.executeScript(null, {
      code: "setInterval(options, 10000)"
    });
  });
// chrome.notifications.onClicked.addListener(redirect);
// function redirect() {
//   alert("Look Awar From Your Computer, Look at something 20 feets away for 20 seconds");
// }

// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.executeScript(null, {
//       code: "alert('hello Wold')"
//   });
// });




    // const alert = function(title, message, timeout) {
    //   chrome.notifications.create({
    //     type: 'basic',
    //     title: "Blink Alert! - Its been 20 minutes!",
    //     message: message || "Look Awar From Your Computer, Look at something 20 feets away for 20 seconds",
    //     iconUrl: "images/icon_128.png"
    //   }, function(id) {
    //     // Close notification in 4 secs
    //     var progress = 0;
    //     var interval = setInterval(function() {
    //       if(++progress <= 21000) {
    //         chrome.notifications.update(id, {progress: progress}, function(updated) {
    //           if(!updated) {
    //             clearInterval(interval);
    //           }
    //         });
    //       } else {
    //         chrome.notifications.clear(id);
    //         clearInterval(interval);
    //       }
    //     }, (timeout || 120000) / 100);
    //   });
    // };