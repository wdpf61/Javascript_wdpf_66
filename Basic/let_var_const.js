// Difference Between var, let, and const in JavaScript

// 1. var (Function Scoped, Can Be Re-declared)
var x = 10;  
console.log(x); // 10

var x = 20; // Re-declaration allowed
x= 30      //  Allowed (Re-assignment)
console.log(x); // 20

function testVar() {
    if (true) {
        var y = 30; // Function scoped
    }
    console.log(y); // 30 (accessible)
}
testVar();

// 2. let (Block Scoped, Cannot Be Re-declared)
let a = 5;
console.log(a); // 5

a = 10; // Allowed (Re-assignment)
console.log(a); // 10

function testLet() {
    if (true) {
        let b = 15; // Block-scoped
    }
    // console.log(b); //  Error: 'b' is not defined
}
testLet();

// 3. const (Block Scoped, Cannot Be Re-assigned)
const PI = 3.14;
console.log(PI); // 3.14

// PI = 3.1415; //  Error: Cannot reassign a constant variable

function testConst() {
    if (true) {
        const gravity = 9.8; // Block-scoped
    }
    // console.log(gravity); //  Error: 'gravity' is not defined
}
testConst();
