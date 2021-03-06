<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/x-icon" href="../Shehzad-logo.png" />
   <style>
      h1,
      h2 {
        text-align: center;
      }
      /* button {
      } */
    </style>
    <title>Table Generator</title>
  </head>
  <body>
    <h1>Table Generator</h1>
    <h2>Enter a number to generate Mutiplication Table:</h2>

    <form onsubmit="table(); return false">
      <label for="table">Enter table of number you want: </label>
      <input type="number" id="table_of" />
      <label for="table">Enter how many times you want: </label>
      <input type="number" id="table_till" />
      <button type="submit">Generate</button>
      <!-- onsubmit="table()" -->
    </form>

    <!-- <p id="table_display"></p> -->
    <div id="table_display"></div>

    <script>
      function table() {
        let table_of = Number(document.querySelector("#table_of").value);
        let table_till = Number(document.querySelector("#table_till").value);

        let table_result = "";
        for (let i = 0; i < table_till; i++) {
          console.log(`${table_of} x ${i + 1} = ${table_of * (i + 1)}`);
          table_result = `${table_of} x ${i + 1} = ${table_of * (i + 1)}`;
            document.querySelector("#table_display").innerHTML += table_result;
            document.querySelector("#table_display").innerHTML += "<br>";
            // document.querySelector("#table_display").innerHTML.
        }

      }
    </script>
  </body>
</html>
