function question1() {
  let num1 = parseInt(prompt("Enter a number:"));
  let num2 = parseInt(prompt("Enter another number:"));

  let sum = Number(num1) + Number(num2);
  let minus = num1 - num2;
  let multiply = num1 * num2;
  let divide = num1 / num2;
  let modulus = num1 % num2;

  document.write("The Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
  document.write(
    "The Subtraction of " + num1 + " and " + num2 + " is " + minus + "<br>"
  );
  document.write(
    "The Multiplication of " +
      num1 +
      " and " +
      num2 +
      " is " +
      multiply +
      "<br>"
  );
  document.write(
    "The Division of " + num1 + " and " + num2 + " is " + divide + "<br>"
  );
  document.write(
    "The Modulus of " +
      num1 +
      " and " +
      num2 +
      " is " +
      modulus +
      "<br><br><br>"
  );
}
function question3() {
  let randomVariable = parseInt(prompt("Initialize the variable:"));
  let s7 = randomVariable + 7;

  document.write(
    "Value after variable declaration is: " + randomVariable + "<br>"
  );

  document.write("Value after increment is : " + ++randomVariable + "<br>");
  randomVariable--;
  document.write("Value after decrement is : " + --randomVariable + "<br>");
  randomVariable++;

  document.write("After adding 7 value is : " + s7 + "<br>");
  document.write("After adding 7 value and decrementing : " + --s7 + "<br>");

  let e3 = randomVariable % 3;
  document.write(
    "Remainder after dividing the variable’s value by 3 : " + e3 + "<br>"
  );
}
//chapter 5 question 4
function question4() {
  let ticket = prompt("How may Movie tickets you want to buy :");
  let ticktetPrice = ticket * 600;
  document.write(
    "<br><br><br>The total amount to buy " +
      ticket +
      " tickets to a movie is " +
      ticktetPrice +
      "PKR."
  );
}

function question6() {
  let celsiusTemp = prompt(`Please enter Temperature in Celsius`);
  let f = (celsiusTemp * 9) / 5 + 32;
  let nf = f.toFixed(2);
  let fahrenTemp = prompt(`Please enter Temperature in Fahrenheit`);
  let c = ((fahrenTemp - 32) * 5) / 9;
  let nc = c.toFixed(2);
  document.write(`${celsiusTemp}°Celsius is ${f}°Fahrenheit<br>`);
  document.write(
    `${fahrenTemp}°Fahrenheit is ${nc}°Celsius<br><br><a href="./chapter5-6.html"><button>Back</button></a>`
  );
}
// let celsius = prompt("Enter tempreature in Celsius");
// let fahrenheit =5;
// Result_celsius = (fahrenheit - 32) * 5/9;
// let result_celsius = celsius*1.8;
// fahrenheit = (Result_celsius - 32) * 5/9;
// document.write("<br><br>Question 6 <br>If " + celsius + "°C is converted into  fahrenheit it is equal to "+ result_celsius);
// document.write("<br><br>Question 6 <br>If " + fahrenheit + "°F is converted into  celsius it is equal to "+ Result_celsius);}

//question 7
function question7() {
  let price1 = Number(prompt("Enter 1st item's Price"));
  let quantity1 = Number(prompt("Enter 1st item's Quantity"));
  let price2 = Number(prompt("Enter 2nd item's Price"));
  let quantity2 = Number(prompt("Enter 2nd item's Quantity"));
}
