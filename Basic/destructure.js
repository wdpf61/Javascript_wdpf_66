// =======================
// Object Destructuring
// =======================

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding", "football"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

// Basic Destructuring
// const {firstName, age}= person;
// console.log(firstName); // John
// console.log(age);       // 25

// // Renaming while destructuring
const { lastName: surname } = person;
console.log(surname); // Doe

// // Nested Destructuring
const {address:{city, zip} }=person;
console.log(city); // New York
console.log(zip);  // 10001

// // Default Value
// const { gender = "Not specified" } = person;
// console.log(gender); // Not specified


// // =======================
// // Array Destructuring
// // =======================

const arr = [10, 20, 30, 40, 100];

// // Basic Destructuring
// const [a, b, c] = arr;
// console.log(a); // 10
// console.log(b); // 20


// // // Skipping Items
// const [, , third] = arr;
// console.log(third); // 30

// // // Default value
// const [x = 1, y = 2, z = 3, p = 4, q = 5] = arr;
// console.log(p); // 40
// console.log(q); // 5 (default because no value in array)





// // =============================
// //  Spread Operator (Objects)
// // =============================

// // Copy object (Shallow)
// const copyPerson = { ...person };
// console.log(copyPerson);

// // Update/Override one property
const updatedPerson = {
  ...person,
  age: 40,
  isStudent: false
};
console.log(updatedPerson); // 30

// // Replace nested object (will remove other keys)

//  const updateSteet= {
//     ...person,
//     address:{
//        street:"124 Shankar"
//     }
//  }

//  console.log(updateSteet);
 

// console.log(brokenAddress.address); // { zip: 123 }

// //  Proper way: Keep old keys with spread
// const fixedAddress = {
//   ...person,
//   address: {
//     ...person.address,
//     zip: 123
//   }
// };
// console.log(fixedAddress.address); 
// // { street: "123 Main St", city: "New York", zip: 123 }


// // =============================
// //  Spread Operator (Arrays)
// // =============================

// const nums = [1, 2, 3];
// const newNums = [...nums, 4, 5];
// console.log(newNums); // [1, 2, 3, 4, 5]

// // Merge two arrays
// const arr1 = [10, 20];
// const arr2 = [30, 40];
// const merged = [...arr1, ...arr2];
// console.log(merged); // [10, 20, 30, 40]

// // Copy array
// const copyArr = [...arr];
// console.log(copyArr);


// // =============================
// //  Function Parameter Destructuring
// // =============================

// function printInfo({ firstName, age }) {
//   console.log(`${firstName} is ${age} years old`);
// }
// printInfo(person);


// // =============================
// //  Shallow Copy vs Deep Copy
// // =============================

// const shallow = { ...person };
// shallow.firstName = "Changed";
// shallow.address.city = "Changed City"; // also changes original!

// console.log("Original:", person.address.city); // Changed City  (shallow copy problem)



// const deep = JSON.parse(JSON.stringify(person)); // Deep copy
// console.log(deep.age);
// console.log(person);

// const deep = JSON.parse(JSON.stringify(person)); // Deep copy
// deep.address.city = "Safe City";
// console.log("Original (after deep):", person.address.city); // Changed City
// console.log("Deep copy:", deep.address.city); // Safe City 