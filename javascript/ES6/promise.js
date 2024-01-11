// creating a promise in javascript

const myPromise = new Promise((resolve, reject) => {});

// Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

// Handle a Fulfilled Promise with then

// syntax: Promise.prototype.then(onFulfilled, onRejected)
makeServerRequest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
