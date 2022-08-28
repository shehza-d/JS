<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
</head>

<body>
    <div>
        <ul>
            <li><a href="index.html">Sum</a></li>
            <li><a href="index2.html">Subtract</a></li>
        </ul>
    </div>
    <div>
        <h1> Matrix Multiply Table</h1>
        <form onsubmit="getinput(); return false">

            <input type="number" min="2" id="getinput1" placeholder="number1" required>
            <input type="number" min="2" id="getinput2" placeholder="number2" required>
            <button type="submit">Check</button>

        </form><br><br>
    </div>
    <div>
        <form onsubmit="multiply(); return false" id="onsubmitform">
            <div id="matrix1"></div>=
            <div id="matrix2"></div><br>
            <button>Multiply</button><br>
            <div id="resultmatrix"></div>

        </form>
    </div>
    <script>
        document.getElementById("onsubmitform").style.visibility = "hidden";
        let value1 = "";
        let value2 = "";

        let matrix1 = document.querySelector("#matrix1");
        let matrix2 = document.querySelector("#matrix2");
        let resultmatrix = document.querySelector("#resultmatrix");
        function getinput() {


            matrix1.innerHTML = " ";
            matrix2.innerHTML = " ";
            resultmatrix.innerHTML = " ";

            value1 = document.querySelector("#getinput1").value;
            value2 = document.querySelector("#getinput2").value;

            if (value1 !== value2) {
                alert("Matrix value must be same");
                return;
            }

            for (let i = 0; i < value1; i++) {
                for (let j = 0; j < value2; j++) {
                    matrix1.innerHTML += `<input class="m1${i} m1${j}" id="m1${i}${j}" placeholder="0" type="number">`;
                    matrix2.innerHTML += `<input class="m2${i} m2${j}" id="m2${i}${j}"  placeholder="0" type="number">`;
                    resultmatrix.innerHTML += `<input class="m3${i} m3${j}" id="m3${i}${j}"  readonly placeholder="0" type="number">`;
                }
                matrix1.innerHTML += `<br>`;
                matrix2.innerHTML += `<br>`;
                resultmatrix.innerHTML += `<br>`;
            }
            document.getElementById("onsubmitform").style.visibility = "visible";
        }

        function multiply() {

            let multiply1 = [];
            let multiply2 = [];
            let multiply3 = [];
            for (let i = 0; i < value1; i++) {
                for (let j = 0; j < value2; j++) {
                    let m1value = +document.querySelector(`#m1${i}${j}`).value;
                    let m2value = +document.querySelector(`#m2${i}${j}`).value;
                    multiply1.push(m1value);
                    multiply2.push(m2value);

                }
            }
            for (let i = 0; i < value1; i++) {
                for (let j = 0; j < value2; j++) {
                    let m3value = 0;
                    for (let k = 0; k < value1; k++) {
                        m3value += multiply1[i * value1 + k] * multiply2[k * value2 + j];
                    }
                    multiply3.push(m3value);
                }
            }
            for (let i = 0; i < value1; i++) {
                for (let j = 0; j < value2; j++) {
                    document.querySelector(`#m3${i}${j}`).value = multiply3[i * value1 + j];
                }
            }
        }
    </script>
</body>

</html>