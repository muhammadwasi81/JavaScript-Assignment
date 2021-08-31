console.clear()
"use strict";

/*
let myAge = 25;
let year = 2000;

console.log(myAge, year);

age = 30;
console.log(age);

const points = 100;
points = 50;
console.log(points);
*/


/*Data types in js

1- string : "Wasi",
2- Number: 22,
3- Boolean: true / false,
4- null: The variable with no value,
5- undefined: the variables that not yet defined
6- Object: Complex data structures- Array, Dates, Literals, etc
7- Symbol: used with objects

*/

// strings  

/*
console.log('Hello world');

let email = "wasiarain819@gmail.com"
console.log(email);

// string concatenation

let firstName = "Muhammad"
let lastName = "Wasi";
let fullName = firstName + " " + lastName;
console.log(fullName);


// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// Strings Methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


let index = email.indexOf('@');
console.log(index);

console.log(email.lastIndexOf('n'));

console.log(email.slice(4, 11));

console.log(email.substr(0, 11));


let str = "wasiarain819@gmail.com";
console.log(str.substr(4, 10)); // it return 13 characters

console.log(email.replace(/a/gi, "adil"));

*/

// let radius = 10;
// const PI = 3.14;

// console.log(radius, PI);

// Math operators + , -, *, /, Exponentiation(**), Division   Remainder (%);

/*
console.log(10 / 2);

console.log(radius % 3);

console.log(PI * radius ** 2);

*/

//order of operation - BRACKET, INDICES, DIVISION, MULTIPLICATION, ADDITION SUBTRACTION.. 

/*

let results = 5 * (10 - 3) ** 2;
console.log(results);

let likes = 10;
likes += 1
likes -= 5;
likes *= 2
likes /= 2

console.log(likes);

console.log(isNaN(0));

let result = 'The blog has ' + likes + 'likes';
console.log(results);

*/

// Template strings

/*
const title = "Best reads of 2021";
const author = "Mario";
const likes = 30;

// concatenation way  using template strings

console.log(`The blog called ${title} that has ${author} and likes of ${likes}`);

// creating html templates

let html = `
 <h2>${title}</h2>
 <p>by ${author}</p>
 <span>${likes} likes</span>
`;
console.log(html);

*/

// Arrays in javaScript [] = position 

/*
let ninjas = ["wasi", "Adil", "haseeb"];

ninjas[2] = "arnold"; // overwrite values
console.log(ninjas[2]);

let ages = [20, 30, 40, 50];

console.log(ages[2]);

console.log(ninjas.length);

*/

// Array Methods

/*
let ninjas = ["wasi", "Adil", "haseeb"];

console.log(ninjas.join('-'));

console.log(ninjas.indexOf('haseeb'));

console.log(ninjas.concat(['ken', 'crystal']));

console.log(ninjas.push("arnold schwernizer"));
console.log(ninjas.pop("arnold schwernizer"));
console.log(ninjas);

*/


/*

//NULL AND UNDEFINED

let age;
console.log(`${age} and age:`); // undefined AGE

let age = null;
console.log(age);
*/


// Booleans and comparisions

/*
console.log(true, false);

// method that can return boolean

let email = "wasi@gmail.com";
let names = ['wasi', "moiz", "haseeb"];

let result = email.includes('!');

console.log(result); // false
console.log(names.includes("wasi")); // true

// comparison operators

let age = 25;

console.log(age === 25);
console.log(age === 30);
console.log(age !== 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'shaun';
console.log(name === 'shaun');
console.log(name === 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun'); // in js lowercase letters are greater than uppercase letters
console.log(name > 'Crystal');

*/

// type conversion

/*
let score = '100';

score = Number(score);
console.log(score + 1);

let result = Number('Hello');

console.log(result);
console.log(String(50));
console.log(Boolean(-1));
console.log(Boolean('wasi'));

*/

