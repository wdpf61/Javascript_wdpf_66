// 1. Function Declaration

function fullName(first_name, last_name, greetings = "Hello") {
  //   let  first_name = "Hamid";
  //   let last_name = "Hasan";
  console.log(`${greetings} ${first_name} ${last_name}`);
}

 fullName("mahmud", "Hasan", "Dear");
 fullName("Rajib", "Roy");
 fullName("Khalid", "Sayfullah");

const anonymousFunction = function () {
    console.log("i am annonymus function");
}

anonymousFunction();

const add = function (a , b) {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}
 
// same arrow function following two function

//const div = (a, b) => a / b;
// const greet = name => `Hello ${name}`;
 

console.log(add(5,6));
console.log(sub(5, 6));

console.log(div(10,5));
// console.log(greet("Harun or Rashid"));

(() => {
    return console.log("i am immidiely invoked function");
})()


// callback function 

function hello(name, Callback){
    return `Hello ${name}  ${Callback}` 
} 

function goTo(){
  return "Go to Your Room"
}

console.log(hello("hasan", goTo()));


function hello2(name, Callback){
   return `Hello ${name}  ${Callback()}` 
}
console.log(hello2("Masud", ()=>{ return "Valu hoye Jao"}));


// higher order function

const division= (a , b)=>{
   return   a/b;
}


const divided = division(10,5); 
console.log(divided);



function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);  


console.log(double(10));


// function greet(name) {
//     // return "Hello, " + name + "!";
//     return `Hello ${name} !`;
// }

// let a = greet("Hasan");


// console.log(greet("Hasan"));



// // 2. Function with Default Parameters
// function greetUser(name = "Guest") {
//     return "Welcome, " + name + "!";
// }


// // 3. Anonymous Function
// const anonymousFunc = function() {
//     console.log("This is an anonymous function.");
// };
// anonymousFunc();

// // 4. Function Expression
// const add = function(a, b) {
//     return a + b;
// };

// // 5. Arrow Function
// const multiply = (a, b) => a * b;

// // 6. Arrow Function with Block Body
// const subtract = (a, b) => {
//     return a - b;
// };

// // 7. Immediately Invoked Function Expression (IIFE)
// (function() {
//     console.log("This function runs immediately!");
// })();



// // 8. Rest Parameters
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// 9. Callback Function 
// function start(){
//     setTimeout(() => {
//         let date= new Date();
//         console.log( date.toLocaleTimeString())
//         start()
//     }, 1000);
// }

// start()

// 10. Higher-Order Function (Returning Function)
// function multiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }
// const double = multiplier(2);
// console.log(double(10));


// function (a:Number , b:Numbrr):Number { 
//    return a+b;
//  }