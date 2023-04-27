//Question 3
let user_name = prompt("Enter your Name: ");
document.write("Hello, Assalam o Alaikum Mr." + user_name)


//Question 1 and 2
let a = prompt("Enter any number", "10");

document.write("<br><br>Result:</br>The Value of a is : " + a);
document.write("<br>.......................................................")

document.write("<br><br><br>The value of per-increment ++a is : " + ++a);
document.write("<br>Now the value is : " + a);

document.write("<br><br><br>The value of post-increment a++ is : " + a++);
document.write("<br>Now the value is : " + a);

document.write("<br><br><br>The value of per-decrement --a is : " + --a);
document.write("<br>Now the value is : " + a);

document.write("<br><br><br>The value of post-decrement a-- is : " + a--);
document.write("<br>Now the value is : " + a);


let b = 2, c = 1;
let result = --b - --c + ++c + c--;
document.write("<br><br>Result : " + result);

//Question 4 and 5 done

//question 6
const resultCalcutaion = () => {
	let sub1 = prompt("Enter 1st name Subject :");
	let mark1 = Number(document.querySelector('#mark1').value);

	let sub2 = prompt("Enter 2nd name Subject :");
	let mark2 = Number(document.querySelector('#mark2').value);

	let sub3 = prompt("Enter 3rd name Subject :");
	let mark3 = Number(document.querySelector('#mark3').value);

	document.querySelector('#sub1').innerText = sub1;
	document.querySelector('#sub2').innerText = sub2;
	document.querySelector('#sub3').innerText = sub3;

	document.querySelector('#p1').innerText = mark1 / 100 * 100;
	document.querySelector('#p2').innerText = mark2 / 100 * 100;
	document.querySelector('#p3').innerText = mark3 / 100 * 100;

	let totalmark = mark1 + mark2 + mark3;
	document.querySelector('#totalmark').innerText = totalmark;
	document.querySelector('#totalpercentage').innerText = totalmark / 300 * 100;
}
//All Done