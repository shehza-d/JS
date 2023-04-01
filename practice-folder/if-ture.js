// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Document</title>
// </head>
// <body>
// <script>
//</script>

let me = "shehzad";
// console.log(me);
// me

let person = {
  userName: "Shehzad",
  age: 19,
};

// console.log(person);

let city = false;
// if (city) {
//   console.log("this is running for true");
// } else {
//   console.log("this is running for false");
// }

// if (1 == "1") {} //ture
// // if(1=1)     {}//error
// if (1 === "1") {} //false

/* Conditional (Ternary) Operator */
// variablename = condition ? value1 : value2;

function sum(x, y) {
  return x + y;
}

// console.log(sum(3, 7));

const arr = ["Hi", "how", "are", "you!"];

// console.log(arr[0]);
// console.log(arr.pop());
// console.log(arr.join(" "));
// for last value

// Simple Array Sum //EasyProblem Solving (Basic)Max Score: 10Success Rate: 94.36%

const arr2 = [2, 4, 2, 9, 6, 5, 9];
let total = 0;
arr2.map((i) => (total += i));
console.log(total);

// console.log(4 % 6);

// HackerRank FizzBuzz problem solved
// console.log(fizzBuzz(15));
// fizzBuzz(15);

// Logging value
function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

//returning value
function fizzBuzz(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz\n";
      continue;
    } else if (i % 3 === 0) {
      result += "Fizz\n";
      continue;
    } else if (i % 5 === 0) {
      result += "Buzz\n";
      continue;
    } else {
      result += `${i}\n`;
    }
  }
  return result;
}

// const arr3 = [3, "foo", "bar", "baz", "shehzad"];
// // console.log(possibleChanges(arr3));
// possibleChanges(arr3);

function possibleChanges(usernames) {
  // Write your code here
  for (let i = 1; i < usernames.length; i++) {
    for (let j = 0; j < usernames[i].length; j++) {
      // if (strcmp(str[i], str[j]) > 0) {      }
      // if (usernames[1 - i][1 - j] < usernames[i][j]) console.log("success");
      // if (usernames[i][i] > usernames[i][j]) console.log("ture");
      // else console.log("flsasese");
      console.log(usernames[i][j], "i=", i, "j=", j);
    }
    console.log("\n");
  }
}
