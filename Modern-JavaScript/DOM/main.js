
// for query selectors (best way to get the elements)
/*

const para = document.querySelector('.error');

console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(errors);


paras.forEach((para, index) => {
  console.log(para, index);
})

*/

// getElementById() way

// const title = document.getElementById('page-title');
// console.log(title);



// getElementsByClassName() way

// const errors = document.getElementsByClassName('error');
// console.log(errors[0]);


// getElementByTagName() way

// const paras = document.getElementsByTagName('p');
// console.log(paras[0]);



//const para = document.querySelector('.error');

// TODO: += append the old text and plus current text..// 
// para.innerHTML += "wasi is a good guy";
// console.log(para);


// const paras = document.querySelectorAll('p');

// TODO: .forEach() node list pr kam kry ga html collection pr nhi.. // 

// paras.forEach((para) => {
//   console.log(para.innerHTML);
//   para.innerHTML += ' new line added '
// })


// const head = document.querySelector('.content');

// console.log(head);

// head.innerHTML += `<h2>Heading h2 hai!</h2>`


// const peoples = ["wasi", "haseeb", "adil"];

// peoples.forEach((person) => {
//   head.innerHTML += `<p>${person}</p>`
// })



// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'http://instagram.com');
// link.innerHTML = 'net ninja website';


// const msg = document.querySelector('p');

// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');



// const title = document.querySelector('.head1');
// title.style.margin = '50px';
// title.style.color = 'red';
// title.style.fontSize = "60px"
// title.style.margin = '';
// console.log(title.style.color);


// const content = document.querySelector('p');

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


//TODO: textContent hmain hide element bhi dega bhalay usko display none krdo..

// const paras = document.querySelectorAll('p');

// paras.forEach((p) => {
//   if (p.textContent.includes('error')) {
//     p.classList.add('error')
//   } else {
//     p.classList.add('success')
//   }
// })

// const title = document.querySelector(".page-title");

// title.classList.toggle('test')
// title.classList.toggle('test')

//TODO: // WE can use 3 methods with classList property that is add, remove, toggle classes..// 



// alert

// function submit() {
//   let element = document.querySelector('.alert').style.display = 'block';
//   setTimeout(() => {
//     let element = document.querySelector('.alert').style.display = 'none';
//   }, 3000);
// }


