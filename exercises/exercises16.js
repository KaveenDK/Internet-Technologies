console.log("exercises16.js is loaded...");

// let count = 1;
// const intervalId = setInterval(function() {
//     console.log("Number : " + count);
//     count++;
//     if (count > 10) {
//         clearInterval(intervalId);
//     }
// });

let counter = 0;

const intervalId = setInterval(() => {
    counter++;
    console.log("Number : " + counter);
}, 1000);
setTimeout(() => {
    clearInterval(intervalId);
}, 10500);