const person = {
  fullName: function () {
    return this.firstName;
  },
};
const person1 = {
  firstName: "Shehzad",
};

// console.log(person.fullName.call(person1));

//not working
// const person = {
//   fullName: function () {
//     return this.firstName;
//   },
// };
// const person1 = {
//   firstName: "Shehzad",
// };

// console.log(person.fullName(person1));
