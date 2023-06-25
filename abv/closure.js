var passed = 3;

var addTo = function () {
  var inner = 2;
  return passed + inner;
};

console.dir(addTo());
var passed = 4;

console.dir(addTo());

// fiddle : http://jsfiddle.net/dileephell/nm0tsp0z/

/*Closures abit differ example*/
var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };

  return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

//console.dir(addThree);
//console.dir(addFour);

console.log(addThree(1));
console.log(addFour(1));

// fiddle: http://jsfiddle.net/dileephell/nh45b5aL/

function showName(firstName, lastName) {
  var nameIntro = "Your name is ";
  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }

  return makeFullName();
}

showName("Michael", "Jackson"); // Your name is Michael Jackson
