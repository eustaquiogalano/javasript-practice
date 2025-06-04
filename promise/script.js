// walk the dog

// promise has 1 argument which is a callback function
// the callback function (argument) has
// 2 arguments: resolve and reject

function walkDog() {
  return new Promise((resolve, reject) => {
    const dogWalked = false;

    if (dogWalked) {
      resolve("Dog happy!");
    } else {
      reject("Dog sad");
    }
  });
}

const human = walkDog();
human
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.error(Error(message));
  });
