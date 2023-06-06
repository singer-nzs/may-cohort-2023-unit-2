//! ADDITION
//! with Numbers
let stringOne = "cheese";
console.log(stringOne + 42);
// Answer: cheese42

let stringTwo = "4";
console.log(stringTwo + 2);
// Answer: 42

console.log(typeof 42);
console.log(typeof [stringTwo + 2]);
/*  Answer: number
    Anwer: object
*/

//! with Booleans
let stringThree = "pie";
console.log(stringThree + true);
// Answer: pietrue

console.log(false + 8);
console.log(true + 8);
/*  Answer: 8
    Answer: 9
*/

console.log([typeof true] + 8);
// Answer: boolean Value of (1)

console.log([typeof false] +8);
// Answer: boolean Value of (0)

console.log(typeof [true + stringThree]);
// Answer: object

//! with Null Values
console.log(null + 7);
console.log(undefined + 7);
/*  Answer: 7
    Answer: NaN
*/

let stringFour = "cat";
console.log(null + stringFour);
console.log(undefined + stringFour);
/*  Answer: nullcat
    Answer: undefinedcat
*/

//! SUBTRACTION
let stringFive = "dog";
console.log(5 - stringFive);
// Answer: NaN

console.log(17 - true);
console.log(17 - false);
/*  Answer: 16
    Answer: 17
*/

//! OTHER ARITHMETIC OPERATORS
console.log(17 / stringOne);
console.log(17 * stringOne);
console.log(17 % stringOne);
/*  Answer: NaN
    Answer: NaN
    Answer: NaN
*/

console.log(17 / true);
console.log(17 * false);
console.log(17 % true);
/*  Answer: 17
    Answer: 0
    Answer: 0
*/

console.log(17 / null);
console.log(17 * null);
console.log(17 % null);
/*  Answer: Infinity
    Answer: 0
    Answer: NaN
*/