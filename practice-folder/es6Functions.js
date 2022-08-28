// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <script>
        function plus(a, b) {
            //function ky shuru ma (IF) se valations lagaty hyn
            return a + b;
        }
        //ak hi function ko bar bar call kar sagty hyn
        let result = plus(3, 5);
        console.log(result);
        //agar js ma koi function kuxh return na kare tw wo "Undefined" return kare ga
        //what is object oriedten programming
        //oo ma stability hyy 
        //
        let arr = [];


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
        //ak return ma () ki zaroorat nhi (tw kya last line khud se return consider ho gyi?)
        let cube2 = num => num * num * num;

        let my_function = (a, b, c) => {
            let num = 5;
            // function ky ander bane hue variable bahar nhi miltay isse memeory eficency aati hy
            return num + a + b + c;

            console.log("ye nhi run hoga kyu ky return ky baad ka function khatam ho jata hy");
        }


        let isEven = (num) => {
            if (num % 2 == 0) {
                alert("even");
            }
            else {
                alert("odd");
            }
        }
        //e or event 
        let my_function2 = () => {
            let num = 5;
            let result = isEven(num);
            alert(result);
        }


{/* 
    </script>
</body>


</html> */}