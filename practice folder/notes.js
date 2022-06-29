/* 27-jun-2022
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





 */

//es5 for HOISTING (named function)
function add(a, b) {
    return a + b;
}


let add = function (a, b) {
    return a + b;
}

//es6 arrow function
let add2(a, b) => {
    return a + b;
}
let cube = (num) => {
    return num * num * num;
}
// ak parameter ma () ki zaroorat nhi
let cube2 = num => num * num * num;

let my_function = (a, b, c) => {
    let num = 5;
    // function ky ander bane hue variable bahar nhi miltay isse memeory eficency aati hy
    return num +a +b +c;

    console.log("ye nhi run hoga kyu ky return ky baad ka function khatam ho jata hy");
}


let isEven = (num) => {
    if(num % 2 ==0){
        alert("even");
    }
    else{
        alert("odd");
    }
}
//e or event 
let my_function2 = () => {
    let num = 5;
    let result = isEven(num);
    alert(result);
}


