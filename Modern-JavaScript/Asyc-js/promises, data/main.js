//TODO: Create Simple Request.. //

/*
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

*/


//TODO: Create Simple Request and if there is an error in request! //

/*
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log(`could not fetch the data..`);
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss');
request.send();

*/

//TODO: Callback functions()..//

/*
const getTodos = (callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText)
    }
    else if (request.readyState === 4) {
      callback(`Could not fetch data! ${undefined}`)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
  request.send();
}

console.log(1);
console.log(2);

getTodos((error, data) => {
  console.log(`Callback fired`);
  if (error) {
    console.log(error);
  }
  else {
    console.log(data);
  }
});

console.log(3);
console.log(4);

*/

/*

//TODO: Using JSON DATA..//

const getTodos = (resource, callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    }
    else if (request.readyState === 4) {
      callback(`Could not fetch data! ${undefined}`)
    }
  })

  request.open('GET', resource);
  request.send();
}

// TODO: this is called callback hell nested callback with in callback();

getTodos('todos/todos.json', (error, data) => {
  console.log(data);

  getTodos('todos/wasi.json', (error, data) => {
    console.log(data);

    getTodos('todos/haseeb.json', (error, data) => {
      console.log(data);
    })
  });
});

*/

// TODO: To avoid callback hell JS have some methods like using promises, async await...

// Promises in js

/*
const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data)
      }
      else if (request.readyState === 4) {
        reject('error getting resources')
      }
    });

    request.open('GET', resource);
    request.send();
  });

};

getTodos('todos/haseeb.json').then((data) => {
  console.log('Promise resolved', data);
}).catch((error) => {
  console.log('Error in promise', error);
})

*/


// TODO: Chaining in promises

/*
//Let’s return to the problem mentioned in the chapter Introduction: callbacks: we have a sequence of asynchronous tasks to be performed one after another
const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data)
      }
      else if (request.readyState === 4) {
        reject('error getting resources')
      }
    });

    request.open('GET', resource);
    request.send();
  });

};

getTodos('todos/haseeb.json')
  .then((data) => {
    console.log('Promise 1 resolved', data);
    return getTodos('todos/todos.json')
  })
  .then((data) => {
    console.log('Promise 2 result', data);
    return getTodos('todos/wasi.json')
  })
  .then((data) => {
    console.log('promise 3 result', data);
    return getTodos('todos/haseeb.json')
  })
  .catch((error) => {
    console.log('Error in promise', error);
  });

*/





  // getSomething().then((data) => {
  //   console.log(data);
  // }).catch((error) => {
  //   console.log(error);
  // });




  // const promise = new Promise((resolve, reject) => {
  //   let age = 20;
  //   if (age) {
  //     resolve(`promise is in resolve!!! success`)
  //   } else {
  //     reject(`error in promise: reject`)
  //   }
  // })

  // promise.then((message) => {
  //   console.log(message);
  // }).catch((error) => {
  //   console.log(error.message);
  // })