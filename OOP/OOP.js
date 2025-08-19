/***********************
 * Covers: Classes, Objects, Inheritance, Encapsulation, Polymorphism, Abstraction,Prototypes
 ***********************

/* 1. Constructor Function (Old way - Pre ES6) */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }



// let person= new Person("Hasan", 25);


// console.log(person);


// Person.prototype.sayHello = function () {
//   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
// };

// Person.prototype.address="Dhaka";


//  const person1 = new Person("Alice", 30);
// person1.sayHello();

// console.log(person1 );


// console.log(Person.prototype.mobile="019");

// console.log(person1.mobile);




 // 1. Classes and Constructor Functions
class Person {
    // Constructor function
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to greet
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
//   // Creating an instance of the Person class
//   const person1 = new Person("Hasan", 30);
//   person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  
  
//   // 2. Inheritance (Extending Classes)
//   class Employee extends Person {
    
//     constructor(name, age, position) {
//       super(name, age);  // Call the parent class constructor
//       this.position = position;
//     }
  
//      // Overriding the greet method (Polymorphism)
//     greet() {
//       console.log(`Hello, my name is ${this.name}, I am a ${this.position}, and I am ${this.age} years old.`);
//     }
//   }
  
// //   // Creating an instance of the Employee class
//    const employee1 = new Employee('Rashed', 25, 'Frontend Developer');
//    employee1.greet(); // Output: Hello, my name is Bob, I am a Developer, and I am 25 years old.
  
  
//   /* 3. Encapsulation (Private Fields using #) */
  // class Car {
  //   #engineNumber;
  
  //   constructor(brand, engineNumber) {
  //     this.brand = brand;
  //     this.#engineNumber = engineNumber;
  //   }
  
  //   getEngineNumber() {
  //     return this.#engineNumber;
  //   }
  
  //   setEngineNumber(newNumber) {
  //     this.#engineNumber = newNumber;
  //   }
  // }


  // let car1= new Car("BMW");
  // car1.setEngineNumber("12544WWW")
  // console.log(car1.getEngineNumber());
  

  
  // 4. Abstraction (Hiding Complexity)
  // class Car {
  //   constructor(model, year) {
  //     this.model = model;
  //     this.year = year;
  //   }
  
  //   // Abstracting the complexity of starting the engine
  //   startEngine() {
  //     this.engineStart();
  //   }
  
  //   // Private method that won't be accessible outside
  //   engineStart() {
  //     console.log(`The engine of ${this.model} (${this.year}) has started.`);
  //   }
  // }
  
  // const car1 = new Car('Tesla', 2022);
  // car1.startEngine(); // Output: The engine of Tesla (2022) has started.
  
  
  // // 5. Polymorphism (Method Overriding and Overloading)
  // class Animal {
  //   speak() {
  //     console.log('Animal makes a sound');
  //   }
  // }
  
  // class Dog extends Animal {
  //   speak() {
  //     console.log('Dog barks');
  //   }
  // }
  
  // class Cat extends Animal {
  //   speak() {
  //     console.log('Cat meows');
  //   }
  // }
  
  // // Creating instances and calling the overridden method
  // const dog = new Dog();
  // const cat = new Cat();
  
  // dog.speak(); // Output: Dog barks
  // cat.speak(); // Output: Cat meows
  
  
//   // // 6. Getter and Setter Methods (Accessing and Modifying Properties)
//   // class Rectangle {
//   //   constructor(width, height) {
//   //     this.width = width;
//   //     this.height = height;
//   //   }
  
//   //   // Getter method for area
//   //   get area() {
//   //     return this.width * this.height;
//   //   }
  
//   //   // Setter method for dimensions
//   //   set dimensions([width, height]) {
//   //     this.width = width;
//   //     this.height = height;
//   //   }
//   // }
  
//   // // Creating an instance of Rectangle
//   // const rect = new Rectangle(5, 10);
//   // console.log(rect.area); // Output: 50
  
//   // // Modifying dimensions using setter
//   // rect.dimensions = [7, 14];
//   // console.log(rect.area); 
  
  
//   // // 7. Static Methods (Methods that are called on the class, not instances)
//   // class MathOperations {
//   //   // Static method
//   //   static add(a, b) {
//   //     return a + b;
//   //   }
  
//   //   static multiply(a, b) {
//   //     return a * b;
//   //   }
//   // }
  
//   // // Using static methods
//   // console.log(MathOperations.add(10, 20)); // Output: 30
//   // console.log(MathOperations.multiply(5, 4)); // Output: 20
  
  
  