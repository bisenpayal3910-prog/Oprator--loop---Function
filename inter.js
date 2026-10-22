// 11. What are the different types of operators in JavaScript?

let a = 10;
let b = 5;

console.log(a + b);  // 15
console.log(a > b);  // true
console.log(a === b); // false



// 12. What is the difference between if-else and switch?

// if-else ----------

// If-else: Used to check conditions and execute different code blocks depending on whether a condition is true or false.
// 1. If-else: Iska use conditions check karne ke liye hota hai. Condition true ya false hone ke according code execute hota hai.


let marks = 75;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// switch case----------

// Switch: Used to compare one expression with multiple fixed values and execute the matching case.
// 2. Switch: Iska use ek expression ki value ko multiple fixed values se compare karne ke liye hota hai.
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}


// Difference: if-else ranges aur complex conditions ke liye best hai, jabki switch multiple fixed values ko check karne ke liye best hai.


// 13. What are loops in JavaScript?

// for
// while
// do...while
// for...in
// for...of

// 1. For Loop
// Easy definition: for loop ka use tab hota hai jab hume pata ho ki code kitni baar repeat karna hai.

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// 2. While Loop
// Easy definition: while loop tab tak code repeat karta hai jab tak condition true hoti hai.


// while loop mein pehle condition check hoti hai, phir code execute hota hai. Condition initially false ho toh loop ek baar bhi nahi chalega.


// let a1 = 1;

// while (a1 <= 5) {
//     console.log(a1);
//     a1++;
// }


// 3. Do-While Loop
// Easy definition: do-while loop mein code pehle execute hota hai aur condition baad mein check hoti hai.


 
let a2 = 1;
do {
    console.log(a2)
    a2++;
}
while(a2<=5);


// Important: Condition false hone par bhi do-while loop kam se kam ek baar execute hota hai.

let i = 10;

do {
    console.log(i);
} while (i < 5);


//4. For...In Loop
// Easy definition: for...in loop ka use object ki enumerable property keys ko access karne ke liye hota hai.

// for...in → Object ki keys (property names).


let student = {
    name: "Payal",
    age: 22,
    course: "BSc CS"
};

for (let key in student) {
    console.log(key);
}

// Agar values print karni hain:

let students = {
    name: "Payal",
    age: 22,
    course: "BSc CS"
};
for (let key in students){
    console.log(students[key]);
}


// 5. For...Of Loop
// Easy definition: for...of loop ka use array ya string jaise iterable ke individual values ko access karne ke liye hota hai.

let fruits =["apple", "mango", "banana"];

for(let fruit of fruits){
    console.log(fruit)
}


// for...of → Values.

// Ye strings par bhi kaam karta hai:

let c = "CAT";
for (let letter of "CAT"){
    console.log(letter)
}

// for...in object ki enumerable property keys par iterate karta hai.

// for...of iterable values par iterate karta hai, jaise arrays aur strings.

const colors = ["Red", "Blue"];

for (let index in colors) {
    console.log(index);
}
// 0, 1

for (let color of colors) {
    console.log(color);
}
// Red, Blue


//  What is a function in JavaScript?
// Answer: A function is a reusable block of code designed to perform a particular task.

function greet(a,b){
    console.log(a+b);
}
greet(2,3)


// -----------------------
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30



// Difference between function declaration and function expression
// Function declaration:

function greet() {
    console.log("Hello");
}

greet();


// Function expression:
const greet = function() {
    console.log("Hello");
};

greet();

// An arrow function is a shorter syntax for writing function expressions.

// Example:
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20


// Traditional function:
function square(n) {
    return n * n;
}

//  arrow function
const square = n => n * n;


// A callback is a function passed to another function so that it can be called by that function.

// Example:
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome to JavaScript!");
}

greet("Payal", message);



// parameter & argument


function greet(name) { // name = parameter
    console.log("Hello " + name);
}

greet("Payal"); // "Payal" = argument