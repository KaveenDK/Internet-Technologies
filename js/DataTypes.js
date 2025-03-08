console.log("DataTypes.js is loaded.....");

// ========== Primitive Data Types in Java Script ==========

// 1. Number - Represents both integer and floating point numbers
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);

console.log("=====================================");

// 2. String - Represents a sequence of characters
let name = "Tharindu Shehan"
console.log(typeof name);

console.log("=====================================");

// 3. Boolean - Represents a logical entity and can have two values: true or false
let isLogged = true;
console.log(typeof isLogged);

console.log("=====================================");

// 4. Undefined - Represents an undefined value
let x;
console.log(x);
console.log(typeof x);

console.log("=====================================");

// 5. Null - Represents an intentional absence of any object value
let y = null;
console.log(y);
console.log(typeof y);

console.log("=====================================");

// 6. BigInt - Represents whole numbers larger than 2^53 - 1
let bigIntValue = 1234567890n;
console.log(typeof bigIntValue);

console.log("=====================================");

// ========== Non-Primitive Data Types (Reference Data Types) in Java Script ==========

// 7. Object - Represents a collection of key-value pairs
let person = {
    name: "Tharindu Shehan",
    age: 55
}
console.log(person);
console.log(typeof person);

console.log("=====================================");

// 8. Array - Represents a list of elements
let colors = ["Red", "Green", "Blue"];
console.log(colors);
console.log(typeof colors);

console.log("=====================================");

// 9. Function - Represents a function
function greet() {
    console.log("Hello World!");
}
greet();
console.log(typeof greet);

console.log("=====================================");

// 10. Date - Represents a date and time
let today = new Date();
console.log(today);
console.log(typeof today);