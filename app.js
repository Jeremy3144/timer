console.log("timer");


// DOM API
// timer API - builtin library in the browser 


//setTimeout
//

// seperation of concerns
// data 


var startBtn = document.querySelector('.start-btn')
var pauseBtn = document.querySelector('.pause-btn')
var resetBtn = document.querySelector('.reset-btn')
var display = document.querySelector('.display')

var timerId = null; // falsey

var seconds = 0;

display.textContent = seconds;

function handleStart() {
  // start timer so that every second it updates by 1
  if (timerId) {
    return;
  }
  timerId = setInterval(function() {
    
    seconds++;

    display.textContent = seconds
  }, 1000);
}

function handlePause() {
  // pause the timer but keep the time
  clearInterval(timerId);
  timerId = null;
}


function handleReset() {
  clearInterval(timerId);
  seconds = 0;
  display.textContent = seconds;
  timerId = null;
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
resetBtn.addEventListener('click', handleReset)