// walk the dog

// promise has 1 argument which is a callback function
// the callback function (argument) has
// 2 arguments: resolve and reject

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked === "vague") {
        resolve("Walk him now!");
      } else if (dogWalked) {
        resolve("Dog already happy!");
      } else {
        reject("Dog sad :(");
      }
    }, 3000);
  });
}

walkDog()
  .then((message) => {
    console.log(message);
    return message;
  })
  .then((message) => {
    console.log("walk the dog everyday " + message);
  })
  .catch((message) => {
    console.error(Error(message));
  });
