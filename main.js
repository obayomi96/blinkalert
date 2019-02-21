// // Realtime Date function in header
setInterval(digitalClock, 1000);
function digitalClock() {
  const date = new Date();
  let hours = date.getHours() + '';
  let minutes = date.getMinutes() + '';
  let seconds = date.getSeconds() + '';
  const day = date.getDay();
  
  if(hours.lenght < 2){
    hours = '0' + hours;
  }
  if(minutes.lenght < 2){
    minutes = '0' + minutes;
  }
  if(seconds.lenght < 2){
    seconds = '0' + seconds;
  }
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const clock = weekdays[day] + ' ' + hours + ':' + minutes + ':' + seconds;
  document.getElementById('time').innerHTML = clock;
} // date function end


// 20 minutes countdown timer
// function countdown( elementName, minutes, seconds ) {
//     var element, endTime, hours, mins, msLeft, time;

//     function twoDigits( n ) {
//         return (n <= 9 ? "0" + n : n);
//     }

//     function updateTimer() {
//         msLeft = endTime - (+new Date);
//         if ( msLeft < 1000 ) {
//             element.innerHTML = "Take your 20-20-20 exercise now";
//         } else {
//             time = new Date( msLeft );
//             hours = time.getHours();
//             mins = time.getMinutes();
//             element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.get() );
//             setTimeout( updateTimer, time.getMilliseconds() + 500 );
//         }
//     }

//     element = document.getElementById( elementName );
//     endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
//     updateTimer();
// } // countdown function end

// countdown( "countdown", 20, 0 );



// Excercise display Controller

const displayExercise = function() {
  // window.alert('It has been 20 minutes, Please take your blink excercise');
  // chrome.alarms.create(" Its been 20 minutes Take your 20-20-20 exercise now");
  // window.close();
  // exercise.style.display = "block";
  // alert("Yes");
};
setInterval(displayExercise, 10000); // 1,200,000 - 20minutes in miliseconds