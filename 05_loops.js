//! For
/* 
    Three parameters
        1 initial expression
        2 condition
        3 increment expression

**NOTE NEW OPERATORS:
- ++
- --
- -=
- +=

let x = 7

x += 4 <-- x = 7 + 4
x -= 4 <-- x = 7 - 4
x *= 4 <-- x = 7 * 4
x /= 4 <-- x = 7 / 4
x %= 4 <-- x = 7 % 4
x **= 4 <-- x = 7 ** 4
x++ <-- Incrementally Increases +1 (8)
x-- <-- Decrementally Decreases -1 (6)
*/

let i = 7;
//       (1)    (2)    (3)  
for(let i = 0; i < 10; i++) {
    console.log(i);
}

/* console.log('global variable: ', i);
    keyword(initial expression, condition; increment) {
        code block
    } */

    for(let i = 10; i <= 100; )
{
    console.log(i);
}
/* 
    keyword(initial expression, condition; increment) {
        code block
    }
*/

for(let i = 10; i <= 100; i += 10) {
    console.log(i);
}

//* Challenge: using a for loop, count to 20 by 2's. Starting at -10.

let v = -10;

for(v; v <= 20; v += 2) {
    console.log(v);
}

for(i = 10; i >= 0; i--) {
    console.log(i);
}


//! Challenge: using a for loop, go through a name and display each letter individually.

let firstName = "Steve";
for (let i = 0; i < firstName.length; i++) {
    const element = firstName[i];
    console.log(element);
}

//! Challenge: Make a for loop where you add up all the numbers from 1 to 50. This should equal to 1275.

let sum = 0;

for(let i = 1; i <= 50; i += 1) {
    sum += i
}

console.log(sum);