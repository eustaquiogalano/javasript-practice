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

// another practice scenario

var req1 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    reject("First!");
  }, 4000);
});
var req2 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve("Second!");
  }, 3000);
});

Promise.race([req1, req2])
  .then(function (results) {
    console.log("Then: ", results);
  })
  .catch(function (err) {
    console.error(Error(err));
  });

fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/manila?unitGroup=us&include=days&key=7KG7V6LV3EKE4JDUQPBZ8EBLX&contentType=json",
  {
    method: "GET",
    headers: {},
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
