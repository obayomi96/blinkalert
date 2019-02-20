// Realtime Date function in header
function digitalClock() {
  var date = new Date();
  var hours = date.getHours() + '';
  var minutes = date.getMinutes() + '';
  var seconds = date.getSeconds() + '';
  var day = date.getDay();
  
  if(hours.lenght < 2){
    hours = '0' + hours;
  }
  if(minutes.lenght < 2){
    minutes = '0' + minutes;
  }
  if(seconds.lenght < 2){
    seconds = '0' + seconds;
  }
  
  var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  
  var clock = weekdays[day] + ' ' + hours + ':' + minutes + ':' + seconds;
  
  document.getElementById('clock').innerHTML = clock;
} // date function end
digitalClock();
setInterval(digitalClock, 1000);



// 1,200,000 - 20minutes in miliseconds


// Excercise display Controller
var exercise = document.getElementById('modal');
var closeExercise = document.getElementById('close');

var displayExercise = function() {
  window.alert('It has been 20 minutes, Please take your blink excercise');
  exercise.style.display = "block";
};
setInterval(displayExercise, 1200000);

// Close exercise modal
closeExercise.addEventListener('click', function() {
  exercise.style.display = "none";
  window.location = "index.html";
});
window.addEventListner('mouseup', function(e) {
  e.preventDefault();
  if(e.target != exercise && e.target.parentNode != exercise) {
    exercise.style.display = "none";
    window.location = "index.html";
  }
});