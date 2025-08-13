// Loop Exercises 

// 1. Print numbers from 1 to 50
  function print50() {
    for (let i = 1; i <= 50; i++) {
      console.log(i);
    }
  }

//   print50();

// 2. Print even numbers from 2 to 100


function printEvenNumber() {
    for (let i = 1; i <= 100; i++){
      
        if (i%2 !=0) {
            continue;
        }

      console.log(i);
      
    }
}

// printEvenNumber();

function printEvenNumber2() {
    for (let i = 1; i <= 100; i++){
      
        if (i%2 ==0) {
          console.log(i);
        }
    }
}

// printEvenNumber2();


// 3. Print odd numbers from 1 to 99

function printOddNumber() {
    
    for (let i = 1; i <= 100; i++){
        if (i%2 !== 0) {
           console.log(i);  
        }
        
    }
}

// printOddNumber();

// 4. Print numbers from 100 to 1

function print100to1(){
    for (let i = 100; i >= 1; i--){
        console.log(i);
   }
}
// print100to1();

// 5. Print the multiplication table of a given number


// 6. Print the sum of numbers from 1 to 100

function sum1To100() {
    let total = 0;  
    for (let i = 1; i <= 100; i+=1){
        total += i;  
    }
    console.log(total); 
 }
sum1To100();

// 7. Print the factorial of a number

function facterial() {
    
    let total = 1;
    let number = Number(prompt("Give me a number"));

    for (let i = 1; i <= number; i++) {
      total *= i;
    }

    console.log(total);
}

// facterial();


// 8. Check if a number is prime

function isPrimeNumber(number) {
//   let number = -3;

  if (number < 2) {
    return console.log(`${number} is not a prime number`);
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return console.log(`${number} is not a prime number`);
    }
  }
  return console.log(`${number} is a prime number`);
}

function isPrimeNumber2(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        return false;
        
    }
  }
  return true;
}



// 9. Print prime numbers between 1 and 100

function isPrimeCheck1To100() {
    for (let i = 1; i <= 100; i+=1){
        if (isPrimeNumber2(i)) {
           console.log(i);
       };
    }
}

isPrimeCheck1To100();