/* 
!   Operators 
    - Plus          +
    - Times         *
    - Power         **
    - Dot           .
    - Assignment    =
    - Comparison    ==

    Used for:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditionals

    Expressions & Statement

    keyword name (expression) {
        code block
    }

    Statements are a collection of a keyword, an expression, and a code block.
*/

// ! Comparison Operators
// Equal To
console.log("Equal to: ", "3" == 3);
//Strict Equal To
console.log("Strictly Equal to: ", "3" === 3);
// Not Equal To
console.log("Not Equal to: ", "3" != 3);
console.log("Not Equal to: ", "3" !== 3); // strict
console.log("Strict Not Equal to 2: ", 3 !== 3) //strict

let aName = "Bob"
console.log("Check Name", aName == "Bob") // false

// Greater Than
3 > 2;

// Less Than
2 < 3;

// Greater Than or Equal To
3 >= 2;

// Less Than or Equal To
2 <= 3;

// ! AND
2 && 3;

// ! OR
2 || 3;

// ! Logical Operators
let x = 1;
console.log(x); // 1
x = x + 1;
console.log(x); // 2

// Addition
let r = 10;
r += 1; // r = r + 1;
console.log(r);

// Subtraction
r -= 2; // r = r - 2;
console.log(r);

// Multiplication
r *= 2; // r = r * 2;
console.log(r);

// Reset Value
r = 10;
console.log(r);

// Division
r /= 2; // r = r / 2;
console.log(r);

// Remainder (Modulus)
r %= 3; // r = r % 3;
console.log(r);

// Exponential
r **= 3; // r = r ** 3;
console.log(r);


let firstName = "Sin";
let lastName = "Ger";
let birthYear = 1993;
let needsCoffee = false;
let currentYear = 2023;
let age = currentYear-birthYear;
console.log(age);
 
/* 
!   Challenge:
    Create 6 different variables. Each one will hold different data types.
        - variable will be detail:
            - First Name - holds a string
            - Last Name - holds a string
            - Birth Year - holds an integer
            - Needs Coffee - holds a boolean
            - The Current Year - holds an integer
            - Age - holds an integer.
                - This should reflect the difference between the current year and birth year. Not a literal.

        These values can be fictional.

            - Console Log Age.
        
*/