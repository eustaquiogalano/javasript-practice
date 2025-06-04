// walk the dog

// promise has 1 argument which is a callback function
// the callback function (argument) has
// 2 arguments: resolve and reject

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("Dog happy!");
      } else {
        reject("Dog sad :(");
      }
    }, 3000);
  });
}

// additional function to practice chaining in promise
function feedDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The Dog is full now and happy");
    }, 5000);
  });
}

// chaining .then, so that you dont need the callback hell
walkDog()
  .then((message) => {
    // logging the message if promise is resolved
    console.log(message);
    // then invoking the next chore for the dog
    return feedDog();
  })
  .then((message) => {
    // then a little reminder for the owner
    // and log the resolve message from feedDog function
    console.log("walk the dog everyday " + message);
  })
  .catch((message) => {
    // throw the error
    console.error(Error(message));
  })
  .finally(() => {
    // a reminder message that the promise is done
    // success of fail
    console.log("Done!");
  });
