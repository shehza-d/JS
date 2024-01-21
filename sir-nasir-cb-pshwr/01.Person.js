class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  display_details() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.country);
  }
}

let person1 = new Person("Ahmed", 22, "Pakistan");
let person2 = new Person("Peter", 19, "USA");

person1.display_details();
person2.display_details();
