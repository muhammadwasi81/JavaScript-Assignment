/* Hoisting is JavaScript's default behavior of moving
all declarations to the top of the current scope (script or function).
Be carefull that only declaration gets hoisted NOT the //TODO: initialitations and expressions */

/*

// This is the example of hoisting
foo();
foo();
foo();


speak();
speak();
speak();


// function declarations
function foo() {
  console.log('Hello');
}

// Function Expressions
const speak = () => {
  console.log('Good day!');
}

*/


// Arguments and parameters

// const speak = (name = 'wasi', time = 'morning') => {
//   console.log(`Good day ${name} ${time}`);
// }

// speak();
// speak('shaun', 'night');


// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5)
// console.log(area);


// Arrow Functions

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// }

// const area = calcArea(5);
// console.log(area);


// const foo = () => {
//   console.log('Hello World');
// }
// foo();


// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill([10, 15, 30], 0.2));


// const name = "Wasi";


// const greet = () => 'Hello';

// const resultOne = greet();
// console.log(resultOne);

// // Methods

// const resultsTwo = name.toUpperCase()
// console.log(resultsTwo);



// CallBack & forEach();

// const myFunc = (callBackFunc) => {
//   // do something
//   let value = 50;
//   callBackFunc(value)
// }

// myFunc(value => {
//   // do something
//   console.log(value);
// });


// The forEach() method calls a function once for each element in an array, in order.

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.



// const people = ['mario', 'wasi', 'haseeb', 'arnold', 'shaun'];

// people.forEach((person, index) => {
//   console.log(`Hello ${person} ${index}`);
// });



// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// numbers.forEach((num) => {
//   console.log(sum += num);
// });


/*
const students = [
  { name: "harry", class: "js" },
  { name: "wasi", class: "python" },
]

function enrollStudents(student, callback) {
  setTimeout(() => {
    students.push(student);
    callback();
  }, 2000);
}

function getStudents() {
  setTimeout(() => {
    let str = '';
    students.forEach((student) => {
      str += `<li>${student.name}</li>`
    });
    document.getElementById('students-list').innerHTML = str
  }, 1000);
}

let newStudent = { name: "wasi", subject: "php" }

enrollStudents(newStudent, getStudents);

*/

// TODO: .forEach() synchronous hai async nhi hai..//
// TODO: asynchonous means kay background main run hony wala function
