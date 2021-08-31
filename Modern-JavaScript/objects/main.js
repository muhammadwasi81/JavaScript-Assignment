// Objects in js have properties & things they can do(methods);\

// objects literals

// let user = {
//   name: "wasi",
//   age: 30,
//   email: "crystal@gmail.com",
//   location: "karachi",
//   blogs: ['why mac and cheese rules', '10 things to make with marmite'],

// }

// console.log(user);
// console.log(user['name']);

// const key = 'location';

// console.log(user['location']);

// user.age = 20;
// console.log(user.age);

// user.name = "candra lio"
// console.log(user.name);


//TODO: this keyword is a context object & it represent teh context in which the current code is executed..//


/*
const blogs = [
  { title: 'why mac and cheese rules', likes: 30 },
  { title: '10 things to make with marmite', likes: 20 },
]


const user = {
  name: "wasi",
  age: 30,
  email: "crystal@gmail.com",
  location: "karachi",
  blogs: [
    { title: 'why mac and cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 20 },
  ],
  login() {
    console.log('User logged in!');
  },
  logOut() {
    console.log('User loggedOut successfully!');
  },
  logBlogs() {
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    })
  }
};

user.login();
user.logOut();
user.logBlogs()

const name = "John lark"
name.toUpperCase();

*/


// const student = {
//   name: "moiz",
//   class: "js",
//   uni: "Iqra University",
//   location: "Karachi",
//   employee: [
//     { id: 10, des: "web dev" },
//     { id: 89, des: "php dev" },
//   ],
//   total() {
//     this.employee.forEach((emp) => {
//       console.log(emp);
//     })
//   }
// }
// console.log(student.uni);
// student.total();


// Math Objects

/*
console.log(Math);
console.log(Math.PI);

//The Math.E property represents Euler's number, base of natural logarithms..
console.log(Math.E);

const area = 7.75;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));
console.log(Math.ceil(area));

// Random Numbers

const random = Math.random();
console.log(random);

console.log(Math.round(random * 100));

*/

// primitive values

//In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

// Reference Values

const userOne = { name: 'wasi', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = "Arnold";

console.log(userOne, userTwo);









