
// for loops

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


//const names = ['wasi', "haseeb", "moiz"];

// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`
//   console.log(html);
// }


// While loops

// let i = 0;

// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let i = 0;

// while (i < names.length) {
//   i++;
//   console.log(names[i]);
// }



// Do While Loop

// let i = 0;

// do {
//   i++;
//   console.log(i);
// } while (i < 5)

// If else statement

// const age = 20;

// if (age === 20) {
//   console.log('you are over 20 years old');
// }



// const ninjas = ["wasi", "haseeb", "moiz", "Arnold", "youshi"];

// if (ninjas.length > 3) {
//   console.log("thats a lot of ninjas");
// }

// const password = 'pass23233';

// if (password.length >= 8) {
//   console.log('ok!');
// } else {
//   console.log('error');
// }

// Logical Operators - OR || and AND &&

// const password = "p@ssword2323"

// if (password >= 8 && password.includes('@')) {
//   console.log('ok!');
// } else if (password.length >= 8 || password.includes('@')) {
//   console.log('enough is enough');
// }
// else {
//   console.log('error');
// }

// Logical NOT(!)

// let user = false;

// if (user) {

// }

// console.log(!true);
// console.log(!false);


// break and continue 
/* Break itself breaks the loop while continue remains continue the loop */

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {

//   if (scores === 0) {
//     continue;
//   }

//   console.log(scores[i]);

//   if (scores[i] === 100) {
//     console.log('congo');
//     break
//   }
// }


// using switch statements

// const grade = 'D';

// switch (grade) {
//   case 'A':
//     console.log('grade is A');
//     break
//   case 'B':
//     console.log('grade is B');
//     break
//   case 'C':
//     console.log('grade is C');
//     break
//   case 'D':
//     console.log('grade is D');
//     break;
//   default:
//     console.log('you are fail');
// }


// Variables and block scope   

// note: var variables block scope 
let age = 30;

// This is an if code block any var can declare can only be valid inside this block bcoz of block scope.. 

/*
if (true) {
  let age = 40; // block scope
  const name = "wasi"
  console.log(`Block Scope: ${age} : ${name}`);

  if (true) {
    const age = 50;
    const name = "simon"
    console.log(`second code block ${age} : ${name}`);
  }
}

console.log(`Global scope: ${age} ${name}`);

*/












