var items = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(items[0][0]);
console.log(items[0][1]);
console.log(items[1][0]);
console.log(items[1][1]);

console.log(items);

/* Create n-dimensional array */

function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}

createArray(); // [] or new Array()

createArray(2); // new Array(2)

createArray(3, 2); // [new Array(2),
//  new Array(2),
//  new Array(2)]
