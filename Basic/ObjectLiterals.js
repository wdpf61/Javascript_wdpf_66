
// 1. Creating an object literal
let  person = {
    firstName: "John",
    lastName: "Doe",
    age: 26,
    isStudent: true,
    hobbies: ["reading", "coding", "football"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName + this.address.street;
    }
    
};

// person.gender="Male";
// person.blood="B+";
// person = {...person, age:50}

// // console.log(person2);
// console.log(person.age);

// delete person.lastName;

console.log(person);





// console.log("Person Object:", person);

// 1 make an object 
// 2 add a  property 
// 3 modify a property
// 4 delete a property 
// 5 use Object.keys, Object.values , Object.entries
// 6 use for in loop








const data= [
    { firstName: "John",
        lastName: "Doe",
        age: 25,
        isStudent: true,
        hobbies: ["reading", "coding", "football"],
        address: {
            street: "123 Main St",
            city: "New York",
            zip: "10001"
        },
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }},
    { firstName: "Hasan",
        lastName: "Rabbi",
        age: 26,
        isStudent: true,
        hobbies: [ "coding", "football"],
        address: {
            street: "123 Rampura",
            city: "Dhaka",
            zip: "1213"
        },
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }},
];


// // 2. Accessing object properties
// console.log("First Name:", person.firstName);
// console.log("City:", person.address.city);
// console.log("First Hobby:", person.hobbies[0]);

// // 3. Calling a method inside an object
// console.log("Full Name:", person.fullName());

// // 4. Modifying object properties
// person.age = 26;
// console.log("Updated Age:", person.age);

// 5. Adding a new property
// person.email = "john.doe@example.com";
// console.log("Added Email:", person.email);

// console.log(person);


// // 6. Deleting a property
// delete person.isStudent;
// console.log("After Deleting isStudent:", person);

// 7. Looping through object keys
// console.log("Looping through properties:");
// for (let key in person) {
//     console.log(key + ":", person[key]);
// }

// // 8. Object.keys, Object.values, Object.entries
// console.log("Keys:", Object.keys(person));
// console.log("Values:", Object.values(person));
// console.log("Entries:", Object.entries(person));

// // 9. Using shorthand syntax (ES6)
const name = "Alice";
const score = 90;

const student ={
    name,       // same as name: name
    score,
    greet() {   // same as greet: function() {}
         console.log("Hello, I'm " + this.name);
    }
};

const student2 ={...student, name:"Khalid"}

// console.log("Student Object:", student);
 student.greet();
 student2.greet();
