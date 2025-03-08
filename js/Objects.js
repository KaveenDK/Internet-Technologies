console.log("Objects.js loaded.....");

// Creating an object
let person = {
    firstName: "Tharindu",
    lastName: "Shehan",
    age: 50,
    hobbies: ["Reading", "Music", "Movies"],
    address: {
        street: "20 Main St",
        city: "Colombo",
        state: "WP"
    },
    getBirthYear: function(){
        return 2025 - this.age;
    }
}

console.log(person);

// 1. Accessing object properties

// a. Dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.getBirthYear());

// b. Bracket notation
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['address']['city']);
console.log(person['getBirthYear']());

console.log("==============================================");

// 2. Adding properties to an object
person.phone = "0712345678";
console.log(person);

console.log("==============================================");

// 3. Modifying properties
person.firstName = "Shehan";
console.log(person);

console.log("==============================================");

// 4. Deleting properties
delete person.phone;
console.log(person);

let car = {
    brand : "Toyota",
    model : "Corolla",
    year : 2020,
    getDiscription: function(){
        return `The ${this.year} - ${this.brand} - ${this.model}`;
    }
}
let discription = car.getDiscription();
console.log(discription);

console.log("==============================================");

// 5. Looping Object properties
for(let key in person){
    console.log(key, person[key]);
}

console.log("==============================================");

// 6. Object destructuring
let { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
// console.log(hobbies);

console.log("==============================================");

// Built-in Object Functions

// 1. Object.keys()
console.log(Object.keys(person));

console.log("==============================================");

// 2. Object.values()
console.log(Object.values(person));

console.log("==============================================");

// 3. Object.entries()
console.log(Object.entries(person));

console.log("==============================================");

// 4. Class definition
class Student {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let student = new Student("Tharindu", "Shehan", 50);
console.log(student);