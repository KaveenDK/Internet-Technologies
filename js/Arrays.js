console.log("Arrays.js loaded...");

// 1. Creating an Array

// 1.1 Using Array Literal
let colors = ['red', 'green', 'blue'];
console.log(colors);

// 1.2 Using new keyword and Array constructor
let colors2 = new Array("red", "green", "blue");
console.log(colors2);

console.log("==============================================");

let myArray = [10, 'Tharindu', true, undefined, null, { name : 'Shehan' }, [1, 2, 3]];
console.log(myArray);

console.log("==============================================");

// 2. Accessing Elements
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); // undefined

console.log("==============================================");

// 3. Modifying Elements
colors[0] = 'yellow';
console.log(colors);

console.log("==============================================");

// Built-in Array Functions

let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

// 5. push() - Adds elements to the end of an array
fruits.push('Grapes');
console.log(fruits);

let items = [];
items.push( {
    id : 1,
    itemName : 'Laptop',
});
console.log(items);

console.log("==============================================");

// 6. pop() - Removes the last element from an array
fruits.pop();
console.log(fruits);

console.log("==============================================");

// 7. unshift() - Adds elements to the beginning of an array
fruits.unshift('Strawberry');
console.log(fruits);

console.log("==============================================");

// 8. shift() - Removes the first element from an array
fruits.shift();
console.log(fruits);

console.log("==============================================");

// 9. concat() - Joins two or more arrays
let vegetables = ['Carrot', 'Cabbage', 'Potato'];
let fItems = fruits.concat(vegetables);
console.log(fItems);

console.log("==============================================");

// 10. forEach() - Calls a function for each element in the array
fItems.forEach(function(item) {
    console.log(item);
});

console.log("==============================================");

// 11. map() - Creates a new array with the results of calling a provided function on every element in the array
let upperCaseItems = fItems.map(item => item.toUpperCase());
console.log(upperCaseItems);
console.log(fItems);

console.log("==============================================");

// 12. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let filteredItems =  fItems.filter(item => item.length > 6);
console.log(filteredItems);
