/* 
! Functions
    - block of code that performs a particular task.
    - simplified program(s) that run a task when invoked.
    
    2 different types:
        - Declaration
        - Expression
*/

//? Declaration
/* 
    structure:
    (1)      (2)
    function hi() {
        code block...
    }

    1: keyword
    2: name of our function, and parenthesis for a parameter.

    * is hoisted
*/

function hi() {
    console.log('hi');
}

//? Expression
/* 
    (1)
    let hey = function hello() {
        code block
    }

    let variableName = function functionName() {
        code block...
    }

    1: The variable "hey" is now representative of the function hello();
    * does not get hoisted
*/

let hey = function hello() {
    console.log("Hey there!");
}

//! Inovking
/* 
structure:
    function name() {
        code block logic...
    }

    (1)
    nameOfFunction();

    1: This is how we call, or "invoke" our function.
*/

function coffeeMaker() {
    console.log("brewing...");
    return "now it's brewing";
}

coffeeMaker(); // <-- on switch
coffeeMaker; // <-- not properly invoked, so nothing happens
console.log(coffeeMaker);
console.log(coffeeMaker()); // <-- comes back undefined because we're not definining anything within it

// Create a function that, when invoked, list out the numbers 1 - 10.

function countFunction() {
    for(i=1; 1 <= 10; i++) {
        console.log(i)
    }
}

countFunction();

// Given the array, create function that lists out the values indivdually.

let arr = [
    'This', 'is', 'really', 'cool'
];

function listValues() {
    for (const word of arr) {
        console.log(word);
        console.log(words[word]);
    
    }
    // OR
    for (const word of words) {
        console.log(word);
        // console.log(arr[word]); // arr['This'] or arr['is'], etc.
    }
}

listValues();

/* 
    ! Parameters

    structure
                (1)
    function hi(name) {
                            (2)
        console.log(`Hi, ${name}`)
    }
        (3)
    hi("Dave");

    1: The parameter(s) that the function is accepting or holding.
    2: Using string interpolation, we can refer to the parameter give to the function.
    3: This is where we define what the parameter's value will be.
*/

function newCoffeeeMaker(filter) {
    console.log(`Maker is brewing ${filter}`);
}

newCoffeeeMaker('coffee');
newCoffeeeMaker('tea');
newCoffeeeMaker('soup');

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function fullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(`Hello, my name is ${fullName}.`)
}

fullName("Sin", "Ger");
fullName("Bob", "Ross");

//! Arguments
let desc1 = "tall person";
let desc2 = "short person";

let thisFunction = function(info) {
    console.log(info);
}

thisFunction(desc1); // <-- desc1 is our argument
thisFunction(desc2); // <-- desc2 is our argument

/* 
    - "info" is our function parameter
    - variables "desc1" and "desc2" are the arguments being passed into the function.
*/

//! Arrow Functions
/* 
    Structure:
    (1)       (2)
    let x = () => {
        code block...
    }

    1: Need to set the arrow function within a variable.
    2: "Fat Arrow" to signify its a function.

    - arrow function were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations.
        - means that arrow functions are NOT hoisted.

    Two Types:
        - Concise Body
        - Block Body
*/

//? Concise Body
let conciseArrow = () => console.log("hello");

//? Block Body
let blockArrow = () => {
    let a = "a";
    return a;
}

//* passing parameters
let apples = color => `The apple is ${color}`;
console.log(apples("red"));
console.log(apples("green"));
console.log(apples("yellow"));

let fruit = (type, count) => {
    let numOfFruit = count;
    return `There are ${numOfFruit} of ${type}.`;
}

console.log(fruit("apples", 10));
console.log(fruit("pears", 5));
console.log(fruit("strawberries", 9));

let books = (author, title) => console.log(`${title} by ${author}`);
books('Stephen King', "IT");

//! Return
/* 
    let hi = () => {
        (1)
        return "hi";
    }

        (2)           (3)
    let newGreeting = hi();
    console.log(newGreeting);

    1: The keyword that brings our data out of our fuction.
    2: We need a variable to hold the value of the return.
    3: When called, the function becomes the value of the return.
        in this case: "hi"
*/

let fName = first => {
    return "steve";
}

let myName = fName();
console.log(myName);

function capitalizeName(first) {
    let capName = '';

    for(l in first) {
        if(1 === 0) {
            capName += first[1].toUpperCase();
        } else {
            capName += first[1].toLowerCase();
        }
    }

    return capName;
}

let nameSet = capitaalizeName(myName);
console.log(`${nameSet}, how are you today?`);

//! IIFE
/* 
    - Immediately Invoked Function Expression
    - Helps allocate space in memory for anonymous functions.
*/

(function() {
    console.log("IIFE Fired")
})();