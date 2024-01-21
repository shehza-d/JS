class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    console.log(this.length * this.width);
  }

  getPerimeter() {
    console.log(2 * (this.length + this.width));
  }

  display() {
    console.log(
      `Area of rectangle is ${a.getArea()} and perimeter is ${a.getPerimeter()}`
    );
  }
}

console.log("Hello");

let a = new Rectangle(2, 3);
a.display();
a.getArea();
a.getPerimeter();

console.log("Hello");
