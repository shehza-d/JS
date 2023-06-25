//Note that the item in the click method's parameter is a function, not a variable.​
//The item is a callback function
// $("#btn_1").click(function () {
//   alert("Btn 1 Clicked");
// });

// As you see in the preceding example, we pass a function as a parameter to the click method. And the click method will call (or execute) the callback function we passed to it.

/* example of callback functions in basic JavaScript:*/

var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index) {
  console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});

/* ------------ ---------------------*/

// global variable​
var allUserData = [];

// generic logStuff function that prints to console​
function logStuff(userData) {
  if (typeof userData === "string") {
    console.log(userData);
  } else if (typeof userData === "object") {
    for (var item in userData) {
      console.log(item + ": " + userData[item]);
    }
  }
}

// A function that takes two parameters, the last one a callback function​
function getInput(options, callback) {
  allUserData.push(options);
  callback(options);
}

// When we call the getInput function, we pass logStuff as a parameter.​
// So logStuff will be the function that will called back (or executed) inside the getInput function​
//  getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich​
// speciality: JavaScript

/*****---------------   ***********/
var photo = downloadPhoto("http://coolcats.com/cat.gif");
downloadPhoto("http://coolcats.com/cat.gif", handlePhoto);

// In this case the gif might take a very long time to download, and you don't want your program to pause (aka 'block') while waiting for the download to finish.

// Instead, you store the code that should run after the download is complete in a function. This is the callback! You give it to the downloadPhoto function and it will run your callback (e.g. 'call you back later') when the download is complete, and pass in the photo (or an error if something went wrong).

function handlePhoto(error, photo) {
  if (error) console.error("Download error!", error);
  else console.log("Download finished", photo);
}

console.log("Download started");
// The biggest hurdle people have when trying to understand callbacks
// is understanding the order that things execute as a program runs.
// In this example three major things happen. First the handlePhoto
// function is declared, then the downloadPhoto function is invoked and
// passed the handlePhoto as its callback, and finally 'Download started' is printed out.
// Note that the handlePhoto is not invoked yet, it is just created and
// passed as a callback into downloadPhoto. But it won't run until downloadPhoto
// finishes doing its task, which could take a long time depending on how
// fast the Internet connection is.
// This example is meant to illustrate two important concepts:
// The handlePhoto callback is just a way to store some things
// to do at a later time
// The order in which things happen does not read top-to-bottom,
// it jumps around based on when things complete
