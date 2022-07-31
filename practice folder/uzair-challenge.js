//Shehzad
let k = 1;
for (i = 10; i > 0; i--) {
	console.log(k++, i)
}


//okasha
for (let i = 1; i <= 10; i++) {
	console.log(`${i} ${11 - i}`)
}

//Mairaj
let i = 1;
let j = 10;
do {
	console.log(i, k);
	i++; j++;
} while (i < 11 && j > 0);

//Saaim 1
for (let i = 1; i < 11; i++) {
	j = -(i - 11);
	console.log(i, j)
}

for(i=1;i<=10;i++){
	console.log(i,11-i);	
}

// Maarig
for(i=0,j=10; i<10&&j>0;  i++,j--){console.log(i+1,j);}











//100 se ulti ginti print karne ka tareeka
for (let i = 0; i < 100; i++) {
	console.log(100 - i)
}


// let k = 0;
// for (i = 0; i < 10; i++) {
// 	for (j = 0; j < 1; j++) {
// 			console.log( i, k)
// 	}
// --k
// }


//Add all index of an array
const arr = [5, 3, 6, 5, 4, 3, 6, 7, 8, 9, 45, 3, 22]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum = sum + arr[i]
}
console.log(sum)
