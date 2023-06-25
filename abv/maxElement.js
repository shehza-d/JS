/* Find the max element in array of objects */

var myArr = [
  { x: 100, y: 200 },
  { x: 200, y: 500 },
  { x: 2000, y: 500 },
  { x: 900, y: 500 },
];
Math.max.apply(
  Math,
  myArr.map(function (o) {
    return o.x;
  })
);
2000;
