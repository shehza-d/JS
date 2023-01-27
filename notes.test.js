test ('Pull request', () => {
	const validPR = validateUserName(mockPR);
	expect( validPR).toBe(true);
});
/* 

NOTES : 

24-jun-2022
developer.mozilla.org is best website for programming 
programiz.com/javascript/library/array   (must watch)
array and object and function is important for Professional JS
font-end ma function 10 lines se zada na ho
.join pre-build function
how to avoid case sencitivity in search in JS
methods : 
(evenNumber)
Slice
isOdd
filters
hoisting (ye pharne hy)
function self sufficient hona chiye
global variables are not used in function

== is discouraged 
=== is 
pure function
CPU CYCLES IS IMPROTANT
 -----

27-jun-2022
HOISTING
 anonomus function 
 => fat arrow function
 global variable jab tak apka program run hota hy wo memory ma load 
return har function ky end ma lagta hy
purity of Function = jis ka output apne input per depend kar raha ho aur predictable
benift of Purity of Function
 Function should be usable as function can be used in react native, react, and MERN and many other places
 jab ak event fire hota hy tw koi event listener ko pata chalta hy ky koi specific kam karna hy
 
 29-jun-2022
make a game and time tracker app with JavaScript
how to convert a website from dark mode to light mode with user's perfrence
how to create desktop app with JavaScript

validation lazmi hyn
fornt end ma nhi backend ma bhi zaroori hy validation kyu ky koi code crash na karde apka 
test karne wale pura wiki ka page input ma paste mar ky code test karty hyn aur code crash ho jata hy
 Test driven development is Highly recommanded and another skill of and experiance developer is to understand what test are valuable and nessary (practice)


parseInt

"strings double quotes ma" aur function jese display = 'none' single ma
native or premitive data types are boolean, string and number


15/jul 2022
customer acquisition price
#6601EB    47 border radius   costumer accouzation price



[
	writing your test before your code is extremly useful
start by writng failing test
]


18-jul-2022
parseInt = point hatane ko  (AGE, PHONE number aur )
kisi chez per toString() lagao tw wo string ban jae ga
controlling decimal points .toFixed()   

29-jul-2022
debugger; keyword for stoping code and debugging code

22-aug-2022
DOM
Circular Object (imp) 
react ka apna DOM hy








make a certificate generator project

09-Jan-2023
coding best practice 
code ma repiation na ho 
code resuable ho
separation of concerns (ak hi file ma sab kam na ho- code splited ho)


27-Jan-2023
this makes the ojbect really a const 
const person = Object.freeze({
name:"shehzad",
age:19
hobbies: Oject.freeze(["Teaching","Eating","Programming"])//array can also be freezed
})
(nested objects are not immutable)

built-in array of unique values
const uniqueNumbers=[1,2,2,3,4,3,3]
const set = new Set(uniqueNumbers)
set.has(1)//true
set.delete(1)
console.log(set)

//this only prints to log when the given condition is matched
console.assert(x===1, "x is not equal to 1")





 */


