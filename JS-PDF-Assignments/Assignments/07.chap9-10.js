function question1() {
	let city = document.querySelector("#question01").value
	if (city === "karachi") {
		document.querySelector("#city_greeting").innerHTML = "Welcome to the City of lights! Karachi";
	} else if (city == "lahore") {
		document.querySelector("#city_greeting").innerHTML = "Welcome to the City of Gardens! Lahore";
	} else if (city == "islamabad") {
		document.querySelector("#city_greeting").innerHTML = "Welcome to the City of Islam and Peace! Islamabad";
	} else if (city == "quetta") {
		document.querySelector("#city_greeting").innerHTML = "Welcome to the City of Fruits! Quetta";
	} else if (city == "peshawar") {
		document.querySelector("#city_greeting").innerHTML = "Welcome to the City of Flowers! Peshawar";
	}
	else {
		document.querySelector("#city_greeting").innerHTML = `Welcome to ${city}`;
	}
}

function question2() {
	document.getElementById("q2").addEventListener("submit", (e) => {
		e.preventDefault()
		let radio = document.getElementsByName('gender')
		if (radio[0].checked) {
			document.querySelector("#gender_greeting").innerHTML = `Hello Sir`;
		}
		else if (radio[1].checked) {
			document.querySelector("#gender_greeting").innerHTML = `Hello Madam`;
		}
		else {
			alert("select one")
		}
	})
}

function question3() {
	let traffic_signs_value = document.querySelector("#traffic_signs").value;
	if (traffic_signs_value == "red") {
		document.querySelector("#traffic_div").textContent = "Must Stop!";
		document.querySelector("#traffic_div").style.backgroundColor = "red";
	} else if (traffic_signs_value == "yellow") {
		document.querySelector("#traffic_div").textContent = "Ready to Move";
		document.querySelector("#traffic_div").style.backgroundColor = "yellow";
	} else if (traffic_signs_value == "green") {
		document.querySelector("#traffic_div").textContent = "Move now";
		document.querySelector("#traffic_div").style.backgroundColor = "green";
	} else {
		alert("Error!")
	}
}

function question4() {
	let fuel = document.querySelector("#petrol").value;
	if (fuel < 0) {
		alert("minus ma kon petrol daalwata hy");
	}
	if (fuel <= 0.25) {
		alert("Please refill the fuel in your car!");
	}
	else {
		alert("You have enough!");
	}
}

// question5  
// answere 5a. is true
// let a = 4;
// if(++a === 5){
// 	console.log("true");
// }else{
// 	console.log("false");
// }

// answere 5b. is false
// let b = 82;
// if (b++ === 83){
// 	console.log("true");
// }else {false}

// answere 5c. is false
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");   //false
// }
// if (c === 13){
// alert("condition 2 is true");   //true
// }
// if (++c < 14){
// alert("condition 3 is true");   //false
// }
// if(c === 14){
// alert("condition 4 is true");   //true
// }


// answere 5d. is true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");}

// answere 5e. 
// if (true){
// alert("True");    YE CHALA
// }
// if (false){
// alert("False");  YE NHI CHALA
// }

// answere 5e. is true        it is alphabetical decided like caa is greater then caz
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

//question 6
function question6() {

	let t01 = Number(document.querySelector("#t1").value);
	let t02 = Number(document.querySelector("#t3").value);
	let t03 = Number(document.querySelector("#t3").value);
	let o01 = Number(document.querySelector("#o1").value);
	let o02 = Number(document.querySelector("#o2").value);
	let o03 = Number(document.querySelector("#o3").value);
	let total_marks = t01 + t02 + t03;
	let obtain_marks = o01 + o02 + o03;
	document.querySelector("#total_markss").innerHTML = `Your total marks are ${total_marks}`;
	document.querySelector("#obtain_markss").innerHTML = `Your obtained marks are ${obtain_marks}`;

	if (total_marks < obtain_marks)  {alert("obtain marks can't be greater than total marks"); return}
	else {
		let oPercentage = (obtain_marks / total_marks) * 100;
		document.querySelector("#percentage").innerHTML = `Your percentage is ${oPercentage}%`;

		if (oPercentage >= 80) {
			document.querySelector("#grade").innerHTML = `Your grade is A-One`;
			document.querySelector("#remarks").innerHTML = `Excellent`;
		} else if (oPercentage >= 70) {
			document.querySelector("#grade").innerHTML = `Your grade is A`;
			document.querySelector("#remarks").innerHTML = `Good`;
		} else if (oPercentage >= 60) {
			document.querySelector("#grade").innerHTML = `Your grade is B`;
			document.querySelector("#remarks").innerHTML = `You need to improve`;
		} else {
			document.querySelector("#grade").innerHTML = `Your grade is F`;
			document.querySelector("#remarks").innerHTML = `Sorry`;
		}
	}
}
//question 7,8 and 9
let question7 = () => {
	const random_number = Math.floor(Math.random() * 10);
	let guess_number0 = Number(document.querySelector("#guess_number").value);
	console.log(random_number);
	if (random_number === guess_number0) {
		document.querySelector("#guess_number_result").innerText = `Bingo! You guessed the correct number`;
	} else {
		document.querySelector("#guess_number_result").innerText = `Sorry! You guessed the wrong number`;
	}
	if (guess_number0 % 3 === 0) {
		document.querySelector("#eight").innerText = `${guess_number0} is divisible by 3`;
	} else {
		document.querySelector("#eight").innerText = `${guess_number0} is not divisible by 3`;
	}
	if (guess_number0 % 2 == 0) {//checking odd or even number
		document.querySelector("#nine-odd-even").innerText = `${guess_number0} is Even number`;
	} else {
		document.querySelector("#nine-odd-even").innerText = `${guess_number0} is Odd number`;
	}
}
//question 10
const question10=()=>{
    const temp = document.querySelector('#temp').value;
	switch(temp){
		case (temp>40):
			console.log(`40`);
			break;
		case (temp>30):
			console.log(`30`)
			break;
		case (temp>20):
			console.log(`20`)
		default:
			console.log(`Error`)
			break;
			
			
			

		
	}
}