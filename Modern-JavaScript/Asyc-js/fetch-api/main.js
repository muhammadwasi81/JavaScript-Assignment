// Fetch Api

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   }) .catch((reject) => {
//     console.log('rejected', reject);
//   })



// async and wait used for much readable and easier way

// any async function return a promise

// const fetchApi = async () => {

//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//   if (!response.ok) {
//     throw new Error('Cannot fetch data')
//   };

//   const data = await response.json();

//   return data;
// };

// fetchApi()
//   .then(data => console.log('resolved: ', data))
//   .catch(error => console.log('rejected: ', error.message));


