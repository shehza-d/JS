const { JSDOM } = require("jsdom");
const { window } = new JSDOM();

var start = window.performance.now();

// task starts
for (var i = 0; i < 100000000; i++);
// task ends

var end = window.performance.now();
console.log(`Execution time: ${end - start} ms`);

//this is running in NODE also
console.time("Execution Time");

// task starts
for (var i = 0; i < 10000000; i++);
// task ends

console.timeEnd("Execution Time");
