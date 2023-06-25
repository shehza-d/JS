var peopleConstructor = function (name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function () {
    console.log(this.name + "," + this.age + "," + this.state);
  };
};

var person1 = new peopleConstructor("dileep", 25, "IN");
var person2 = new peopleConstructor("sunil", 27, "IN");

person1.printPerson();
person2.printPerson();
