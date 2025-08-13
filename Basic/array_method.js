// Important JavaScript Array Methods

let  numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// CRUD
// 1 create 
// 2 read
// 3 update
// 4 delete

// 7. splice() - Adds/Removes/replace elements in place

// let b = fruits.splice(4, 0, "Orange", "Plum");
// let b = fruits.splice(0, 1);
//         fruits.splice(3,0, "Plum","Pinapple");


//  console.log(b);
//  console.log(fruits);








// 1. push() - Adds elements to the end

// console.log(numbers);
// console.log(fruits);

// numbers.push(6);
// fruits.push("Pinapple");

// console.log(numbers);
// console.log(fruits);


// 2. pop() - Removes the last element

// console.log(numbers);
// console.log(fruits);
// numbers.pop();
// fruits.pop();
// console.log(numbers);
// console.log(fruits);

// 4. unshift() - Adds elements to the beginning

//  numbers = [1, 2, 3, 4, 5, 6];
//  fruits = ["Apple", "Banana", "Cherry", "Date"];

// console.log(numbers);
// console.log(fruits);


// numbers.unshift(0);
// fruits.unshift("Orenge");


// console.log(numbers);
// console.log(fruits);



// 3. shift() - Removes the first element
 
//  numbers = [1, 2, 3, 4, 5];
//  fruits = ["Apple", "Banana", "Cherry", "Date"];

// console.log(numbers);
// console.log(fruits);


// numbers.shift();
// fruits.shift();


// console.log(numbers);
// console.log(fruits);


// 5. concat() - Merges two arrays

//  numbers = [1, 2, 3, 4, 5];
//  fruits = ["Apple", "Banana", "Cherry", "Date"];

// console.log(numbers);
// console.log(fruits);

// let a = numbers.concat(fruits);
// let b = [...numbers, ...fruits]  //spread operator

// console.log(a);
// console.log(b);
// console.log(fruits);

// 6. slice() - Extracts a section of an array

//  numbers = [1, 2, 3, 4, 5];
//  fruits = ["Apple", "Banana", "Cherry", "Date"];

// let a = numbers.slice(2,4);
// let b = fruits.slice(1,3);
// console.log(a);
// console.log(b);
// console.log(fruits);




// 8. indexOf() - Finds the  index of an element first element

 numbers = [1, 2, 3, 4, 5];
 fruits = ["Apple", "Banana", "Cherry", "Date"];

// let a = numbers.indexOf(4);
// let b = fruits.indexOf("Apple");
// console.log(a);
// console.log(b);

// 9. includes() - Checks if an array contains an element

 
//  fruits = ["Apple", "Banana", "Cherry", "Date"];
// console.log(fruits);
// let b = fruits.includes("PinApple");
// console.log(b);

// 10. forEach() - Iterates over an array

 fruits = ["Apple", "Banana", "Cherry", "Date"];

// for(let i = 0 ; i < fruits.length ; i++){
//    console.log(fruits[i]); 
// }


// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });


// fruits.forEach((fruit, index) =>{
//     console.log(index)
// });

// 11. map() - Creates a new array by transforming each element
 fruits = ["Apple", "Banana", "Cherry", "Date"];

//   let fruits2=  fruits.map((fruit)=>{
//        if(fruit == "Apple"){
//          return `${fruit}:380`;
//        }else if(fruit == "Banana"){
//          return `${fruit}(12piece):120`;
//        }else if(fruit == "Cherry"){
//          return `${fruit}:370`;
//        }else{
//          return `${fruit}:1250`;
//        }
//    });


// console.log(fruits2);
//  console.log(fruits);

let sales= [
    {id:2, name: "Kamal" , age:30, total:1000},
    {id:3, name: "Masuma" , age:20, total:1500},
    {id:4, name: "Khaled" , age:6, total:50},
    {id:1, name: "Masud" , age:25, total:2000},
    {id:5, name: "Rahman" , age:40, total:500},
    {id:6, name: "Jamal" , age:60, total:800},
]





// 12. filter() - Filters elements based on a condition

let sales1= sales.filter((s)=>{
    return s.id != 1;
});

let nettotal= sales1.reduce((acc, sales)=>{return acc+sales.total},0);

console.log(sales1);
console.log(nettotal);

//  numbers = [1, 2, 3, 4, 5];


// const num2 =numbers.filter((num)=>{
//    return num < 2
// });

//  console.log(num2);
//  console.log(numbers);


//  let upto1000Tk= sales.filter((s)=>{
//         return s.total >1000;
//  })
// console.log(upto1000Tk);

// let total= (data)=>{
//    let netTotal=0;
//    data.filter((s)=>{
//      if(s.age > 18){
//        netTotal+= s.total;
//      }
//    });

//    return netTotal;

// }

// console.log(total(sales))

// 14. find() - Finds the first element that matches a condition
//  numbers = [1, 2, 3, 4, 5];
// const num3 = numbers.find((num)=>{
//      return num > 2
// })

// console.log(num3)

// 13. reduce() - Reduces array to a single value

// let totalsell= sales.reduce((total , sale )=>{return total + sale.total },0);
// console.log(totalsell);

// let saleTotal=5000;

// let saleTotal=0;
// sales.forEach(sale =>{
//   saleTotal+=sale.total;
// });

// console.log(saleTotal);


// 16. sort() - Sorts an array
// 17. reverse() - Reverses an array

 numbers = [1, 2, 3, 4, 5,99,55,88];
 fruits = ["Apple", "Cherry", "Date" , "Banana"];

// const sort=  numbers.sort();
// const fr=  fruits.sort().reverse();
// console.log(sort)
// console.log(fr);

// 18. join() - Converts array to a string
// const fr= fruits.join().split(",");
// console.log(fr);


// 19. some() - Checks if any element meets a condition

// const fr= fruits.some((fr)=> fr === "Apple" );
// console.log(fr);

// const nm1 = numbers.some((n)=> n > 2)
// console.log(nm1);
// 20. every() - Checks if all elements meet a condition
// const nm = numbers.every((n)=> n > 0)
// console.log(nm);


