let x = 12;

function scope() {
    let x = 33; // <-- New variable x
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

/* 
    Variable Keywords
        - const: cannot be reassigned
        - var: scoped to nearest function block
        - let: scoped to the nearest enclosing block
*/

//* Var
var v = 12;

function varTest() {
    var v = 33;

    if(true) {
        var v = 45;
        console.log(`Var - within IF: ${v}`); //45
    }

    console.log(`Var - outside IF: ${v}`); //45
}

varTest();
console.log(`Var - Outside Function: ${v}`); //12
//* LET example
let l = 12;

function letTest() {
    let l = 33;
    if(true) {
        let l = 45;
        console.log(`Let - within IF: ${l}`); //45
    }
    console.log(`Let - outside IF: ${l}`); // 33
}

letTest();
console.log(`Let - outside Function: ${l}`); // 12

//! Hoisting
/* 
    - JS reads from top to bottom in two different passes
        1st pass:
            - Made by the compiler. This is where hoisting is intiated.
            - Compiled for execution.
        2nd pass:
            - Variable assigned
            - Executes any hoisted code.
*/

console.log(firstName)
let firstName = "Everly";

b();

function b() {
    console.log("I have been hoisted!");
}

let notHoisted = () => console.log(`not hoisted`);
notHoisted();
