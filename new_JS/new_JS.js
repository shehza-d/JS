// Muhammads Code Refactored https://github.com/MuhammadReyan/Function-Logics-Questions/

// Q1 Write a function that takes an array of numbers as input and
// returns the sum of all even numbers in the array.
//  Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] Output: 30

const evenSum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) result += i;
  }
  return result;
};

console.log(evenSum([1, 2, 3, 4, 5, 6, 7])); // 12

// with forEach instead of for loop
// arr.forEach((i) => {
//   if (i % 2 == 0) result = result + i;
// });

// Q2 Write a function that takes a string as input and
// returns the number of vowels in the string.
// Input: "hello world" Output: 3

const findVowels = (str) => {
  let count = str.match(/[aeiou]/gi);
  if (!count) return 0;
  return count.length;
};

console.log(findVowels("dfauiojdf df dfdf")); // 4
console.log(findVowels("hello world!")); // 3

// Q3 Write a function that takes an array of strings as input and
// returns the length of the longest string in the array.

let strings = ["hello world", "world", "hello", "hello world hello world"];

const longestString = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > result.length) result = arr[i];
  }
  return result.length;
};
console.log(longestString(strings));

// Q4 Write a function that takes an array of numbers as input and
// returns the average of all the numbers in the array

const arraySum = (arr) => {
  let total = 0;

  for (let i in arr) {
    total += arr[i];
  }
  return total / arr.length;
};
console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8]));

// Q5 Write a function that takes an object as input and returns
// an array of all the keys in the object.

const ObjKeyExtractor = (obj) => Object.keys(obj);

let object = {
  a: "hello",
  b: "world",
  c: 20,
};

console.log(ObjKeyExtractor(object));

// Q6 Write a function that takes an array of objects as input and returns
//    an array of all the values for a specified key in each object.

const ObjValueExtractor = (obj) => Object.values(obj);

let object2 = {
  a: "hello",
  b: "world",
  c: 20,
};

console.log(ObjValueExtractor(object2));

// Question no 7 Write a function that takes an array of strings as input and
// returns an array of all the unique strings in the array.

const uniqueString = (arr) => [...new Set(arr)];

let arr = [
  "apple",
  "banana",
  "banana",
  "pineapple",
  "mango",
  "apple",
  "banana",
  "pineapple",
  "mango",
];
console.log(uniqueString(arr));

// Q8 Write a function that takes an array of numbers as input and
// returns the product of all the numbers in the array.

const product = (arr) => {
  let result = 1;

  for (let i in arr) {
    result *= arr[i];
  }
  return result;
};

console.log(product([4, 4, 4])); // 64

// Q14 Function to return an array of all the values for a specified key in each object:
// Input: [{ name: "John", age: 30 }, { name: "Mary", age: 25 }, { name: "Peter", age: 35 }]
//  Output: ["John", "Mary", "Peter"]

const persons = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Mary",
    age: 25,
  },
  {
    name: "peter",
    age: 35,
  },
];

const propertyExtractor = (arr, key) => arr.map((obj) => obj[key]);

console.log(propertyExtractor(persons, "name"));
