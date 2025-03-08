console.log("Functions.js loaded.....");

// 1. Function Declaration
function gteet(firstName){
    if(typeof firstName === "undefined"){
        console.log("Hello World");
    }
    else{
        // console.log("Hello "+firstName);
        // console.log("Hello ", firstName);
        console.log(`Hello ${firstName} !`); // Template literals
    }
}
gteet("DK");
gteet();

console.log("====================================");

// 2. Function Expression
let greet2 = function(firstName){
    console.log(`Hello ${firstName} !`);
}
greet2("Dimantha");

console.log("====================================");

// 3. Arrow Function
let greet3 = (firstName) => {
    console.log(`Hello ${firstName} !`);
}
greet3("Kaveen");

let greet4 = firstName => console.log(`Hello ${firstName} !`);
greet4("Tharindu");

console.log("====================================");

// 4. Default Parameters
let greet5 = (firstName = "Shehan") => {
    console.log(`Hello ${firstName} !`);
}
greet5();
greet5("Shehani");

console.log("====================================");

// 5. Rest Parameters - Allows you to represent an indefinite number of arguments as an array.
let sum = (...numbers) => {
    numbers.forEach(number => console.log(number));
}
sum(1, 2, 3, 4, 5);