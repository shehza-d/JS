//03-Jan-2022
//OOP
// constructor should start with capital
class Person {
  constructor(name, dob) {
    this.name = name;
    //   console.log(this);//gives all object created by this class
    this.birthday = new Date(dob);
  }

  //method
  async calculateAge() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
const me = new Person("shehzad", "03-15-2003");
const friend = new Person("okahsa");
// console.log(me,friend);

// console.log(this);
// console.log(me.calculateAge());

//each object in JS has a prototype and prototype is an object itself
//Object.prototype

//Kya prototypes extensively use hoty hyn

//Constructor (old way)
// function PersonNew(userName)  {
//   this.userName = userName;
// };

//Constructor (new way)
class PersonNew {
  constructor(userName) {
    this.userName = userName;
  }
  greeting() {
    return `Hello ${this.userName}`;
  }
  //static method dosen't require new Object to be created
  static addNumbers(x, y) {
    return x + y;
  }
}

const user1 = new PersonNew("ALI");
// console.log(user1.greeting());
// console.log(PersonNew.addNumbers(5, 7)); //calling static method

//SUB CLASSES
class Vehicle {
  constructor(vehicleName) {
    this.vehicleName = vehicleName;
  }
  greeting() {
    return `Your vehicle is ${this.vehicleName} being cleaned`;
  }
}

class Car extends Vehicle {
  constructor(vehicleName, vehicleType) {
    super(vehicleName);
    this.vehicleType = vehicleType;
  }
  static getWashFee() {
    return 500;
  }
}
const carObj = new Car("Honda", "Bike");
console.log(carObj.greeting()); //greeting method is not in Car class but is being called from parent class with the help of super()
