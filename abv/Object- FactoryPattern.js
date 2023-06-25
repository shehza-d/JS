var peopleFactory = function (name, age, state) {
  var temp = {};

  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function () {
    console.log(this.name + "," + this.age + "," + this.state);
  };

  return temp;
};

var person1 = peopleFactory("dileep", 25, "IN");
var person2 = peopleFactory("sunil", 27, "IN");

person1.printPerson();
person2.printPerson();
