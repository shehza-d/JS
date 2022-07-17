
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <!-- <link rel="stylesheet" media="screen and (max-width:430px)" href="mobile.css"> -->
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Matrix Multiplication App</h1>
    </header>


    <form onsubmit="start(); return false"; id="form1">
    <div class="box">
       <div class="sep"><label for="input_1">No. of Rows :</label> <input type="number" required id="input_1" placeholder="2" min="2" max="10"></div>
       <div class="sep"><label for="input_2">No. of Columns : </label> <input type="number" required id="input_2" placeholder="2" min="2" max="10"></div>
       <button type="submit" class="btn"  id="btn1">Start</button>
    </div>
    
    </form>


    <form onsubmit="calc(); return false"; id="form2">

        <div class="matBox">
            <div id="mat_1" class="matrix"></div>
            <h1 class="matrixs">X</h1>
            <div id="mat_2" class="matrix"></div>
            <h1 class="matrixs">=</h1>
            <div id="result" class="matrix"></div>
        </div>
        <button type="submit" class="btn">Calculate</button>
    </form>


    <script>function start() {

		// changing the display of form2 from none to block
		let display = document.querySelector('#form2')
	
		// target the values of rows and columns
		let input_1 = document.querySelector('#input_1').value;
		let input_2 = document.querySelector('#input_2').value;
	
	
		// changing the data type from string to number
		input_1 = Number(input_1);
		input_2 = Number(input_2);
	
	
		// validations for matrices
		if (isNaN(input_1) && isNaN(input_2)) {
			alert("Please Enter Valid Rows And Columns")
	
	
		}
		else if (input_1 == input_2) {
			// input boxes for 1st matrix
			document.querySelector('#mat_1').innerHTML = "";
			for (let i = 0; i < input_1; i++) {
				for (let j = 0; j < input_2; j++) {
	
					document.querySelector('#mat_1').innerHTML += (`<input type="number" value="0" required id="mat1_${[i]}${[j]}" class="vals">`)
				}
				document.querySelector('#mat_1').innerHTML += ("<br>")
	
			}
	
	
			// input boxes for 2nd matrix
			document.querySelector('#mat_2').innerHTML = "";
			for (i = 0; i < input_1; i++) {
				for (j = 0; j < input_2; j++) {
	
					document.querySelector('#mat_2').innerHTML += (`<input type="number" value="0" required id="mat2_${[i]}${[j]}" class="vals">`)
				}
				document.querySelector('#mat_2').innerHTML += ("<br>")
	
			}
	
	
			// console the inputs values
			console.log("No.of rows are : ", input_1);
			console.log("No.of columns are : ", input_2);
	
			display.style.display = 'block';
	
	
		}
	
		else {
			alert("Please Enter Same No. Of Rows And Columns");
		}
	}
	
	// function for calculation
	function calc() {
	
		// changing the display of result from none to block
		let display = document.querySelector('#result')
		display.style.display = 'block'
	
		// target the values of rows and columns
		let input_1 = Number(document.querySelector('#input_1').value);
		let input_2 = Number(document.querySelector('#input_2').value);
	
		//    initiallizing arrays
		let mats_1 = [[], [], [], [], [], [], [], [], [], []];
		let mats_2 = [[], [], [], [], [], [], [], [], [], []];
		let result = [[], [], [], [], [], [], [], [], [], []];
	
		// getting values from 1st and 2nd matrix
		for (let i = 0; i < input_1; i++) {
			for (let j = 0; j < input_2; j++) {
				mats_1[i][j] = Number(document.getElementById(`mat1_${[i]}${[j]}`).value);
				mats_2[i][j] = Number(document.getElementById(`mat2_${[i]}${[j]}`).value);
			}
		}

		// multiplication of martix 1 and 2
		for(let i = 0; i < input_1; i++){
			result[i] = []
			for(let j = 0; j < input_1; j++){
			  result[i][j] = 0
			  for(let k = 0; k < input_1; k++){    
				result[i][j] += mats_1[i][k] * mats_2[k][j];
			  }  
			}
			
		  }
	
	
	
	
		for (let i = 0; i < input_1; i++) {
	
			for (let j = 0; j < input_2; j++) {
				document.querySelector('#result').innerHTML += (`<strong id="div_${i}${j}" class="value" style="text-align:center;">&nbsp;&nbsp;</strong>`)
	
			}
			document.querySelector('#result').innerHTML += ("<br>")
		}
	
		for (i = 0; i < input_1; i++) {
			for (j = 0; j < input_2; j++) {
				document.getElementById(`div_${i}${j}`).innerText += result[i][j];
			}
	
		}
	
		console.log(mats_1);
		console.log(mats_2);
		console.log(result);
		return;
	}</script>

</body>
</html>
