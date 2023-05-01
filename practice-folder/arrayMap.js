// let ary = ["hello","shehzad","saad","Maarig","rehan",'okasha',"Adil"];
// //idher item aur index keywords nhi hyn inko apni marzi se koi bhi nam de sagty hyn
// ary.map ((item, index) => {
//     console.log(item, index);
//     // console.log("shehzad\n\n");
//     document.write("shehzad\n\n");
// });

let ary2 = ["hello", "shehzad", "saad", "ali ", "rehan"];
let copy = ary2.map((item, index) => {
  // console.log(item, index);
  return item.toUpperCase();
});
console.log(copy);
//Local lowercase

//  const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// console.log(newArr);

// function myFunction(num) {
//   return num * 10;
// }
