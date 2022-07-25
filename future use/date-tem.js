<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>

	<!-- iso date
	date document is mozilla
	sir [epoch time] ma time save karty hyn server ma (ye format har programming language ma hota hy )
	
	Moment.JS is used for time related tasks

	20-jul-2022
	practice time from book
	bilkul hahaha phir ghantau ma conver ho gya kya dekh rahe ho sir ki taraf dekho
    apple ky pas hy objective C  aur swift hyn
    swift sheek lena chiye
	agar user ka time get na karna ho aur khud ky code se time dekhane ka kya tareeka hy (kyu ky user ka time galat set bhi ho sagta hy)
	do dates ma difference 
	assignment
	input ma date lo aur usko age and your next birthday batani hy (agar date guzar gyi tw tw alag logic agar date is saal ma aani hy tw )
what is anonumous name function


-->
</head>

<body>
	<script>
		let d = new Date();
		document.write(d)

		// console.log(d.toDateString());
		// console.log(d.toString());

		/* document.write(d.)
		
		document.write(d.getDate(), d.getMonth()+1, d.getFullYear());
		document.write(d.getDate());
		document.write(d.getMonth()+1);
		document.write(d.getFullYear());
		
		
		document.write(d.getDay());
		document.write(d.getHours());
		
		document.write(d.getVarDate());
		document.write(d.getTimezoneOffset());  */
		// console.log(d.getTime());
		// console.log(d.getTime());
		// console.log(d.getTime());
		// console.log(d.getTime());

		// let ammp = "AM"
		// if (hour > 12) {
		// 	hour = hour - 12;
		// 	ammp = "PM ";
		// }

		let ms = d.getMilliseconds();
		let millis = new Date(ms);
		console.log(ms)
		

		//moment library
		let time = moment().format('Do MMMM YYYY, h:mm:ss');   // ye string return karta hy 
		console.log(time)

		//counter
		setInterval(() => {
			document.write(`Shehzad\n`)
		}, 600);  //ye clear ho sagta hy
		//jab tak zaroorat hy isko run rakho iska kam khatam hone ky baad isko clear karwa do 


		setTimeout(() => {
			console.log(`Shehzad`)			
		}, 1000);

//  test hy 21 se 40 chapter tak hyy
	</script>
</body>

</html>