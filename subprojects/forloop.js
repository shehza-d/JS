<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="../Shehzad-logo.png" />
    <title>JS</title>
</head>
<body>
    <h1>For Loop Practice</h1>

	<button onclick="question1()">Print your name 10 times with For Loop</button><br><br>
	<button onclick="question2()">Print numbers from 1 to 10</button><br><br>
	<button onclick="question3()">Print Table of User's Desire Number</button><br><br>
	<!-- <button onclick="question4()">t</button><br> -->
	<!-- <button onclick="question5()"></button><br> -->
	<!-- <button onclick="question6()">p</button><br><br> -->
    <script>
        
        //some statement running 10 times with for loop
        function question1(){
            let user_name = prompt("Enter your Name")
            for (let i=0; i<10; i++){
                document.write(user_name +"<br>");                
            }
        }

        //print ginti 1-10 with for loop  
        function question2(){
            for (let i=0; i<10; i++){
                document.write(i+1 +"<br>");                
            }
        }

        //ask user what table they want to print    (with backticks`` and $)
        function question3(){
            let table_of = prompt("Enter which numbers Table you want to see.")
            for (let i=0; i<20; i++){
                document.write(`${table_of} x ${i+1} = ${table_of*(i+1)}<br>`);                
            }
        }





    </script>
    
</body>
</html>