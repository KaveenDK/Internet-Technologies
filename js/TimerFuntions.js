console.log("TimerFunctions.js is loaded...");

// setTimeout() function - executes a function after a specified time 
// const timeoutId = setTimeout(function() {
//     console.log("Timer is done!");
// }, 5000);
// clearTimeout(timeoutId);

// setInterval() function - executes a function repeatedly after a specified time
const intervalId = setInterval(function() {
    console.log("This message will be printed every 2 seconds");
}, 2000);
clearInterval(intervalId);