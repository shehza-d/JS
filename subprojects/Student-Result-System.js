<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/x-icon" href="../Shehzad-logo.png" />
    <title>Result card</title>
  </head>
  <body>
    <!-- <h1 id="meraH1"></h1> -->
    <script>
      // document.getElementById("meraH1").innerHTML = "Hello World";
      let marks = prompt("Enter your Marks");
      if (marks >= 80 && marks < 100) {
        document.write("You haved passed in A+ Grade.❤");
      } else if (marks >= 70 && marks < 80) {
        document.write("You haved passed in A Grade.");
      } else if (marks >= 60 && marks < 70) {
        document.write("You haved passed in B Grade.");
      } else if (marks >= 50 && marks < 60) {
        document.write("You haved passed in C Grade.");
      } else if (marks >= 40 && marks < 50) {
        document.write("You haved passed in D Grade.");
      } else if (marks >= 0 && marks < 40) {
        document.write("You have FAILED SORRY.");
      } else {
        document.write("ERROR hy koi");
      }
    </script>
  </body>
</html>
