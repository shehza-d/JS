<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" type="image/x-icon" href="../Shehzad-logo.png" />
  <title>Grading Advance</title>
</head>

<body>
  <!--type="number" min="1" -->
  <h2>Percentage Calculator</h2>
  <form onsubmit="funshun(); return false">
    What was total Marks<input id="input_total_marks" /><br />
    What was Obtain Marks<input id="input_obtain_marks" />
    <button type="submit">Check</button>
  </form>
  <p id="error_msg_ID" style="color: red;"></p>
  <h2>Percentage is : </h2>
  <h2 id="percentage_ID"></h2>
  <h2>Your Grade is : </h2>
  <h2 id="grade_ID"></h2>
  <script>
    function funshun() {
      let total_marks = Number(
        document.querySelector("#input_total_marks").value
      );
      let obtain_marks = Number(
        document.querySelector("#input_obtain_marks").value
      );

      //Valadtion
      // let error_msg = "";
      if (isNaN(total_marks)) {
        // error_msg = "Please enter a valid number!"
        document.querySelector("#error_msg_ID").innerText = "Please enter a valid number!"
      }
      if (isNaN(obtain_marks)) {
        // error_msg = "Please enter a valid number!"
        document.querySelector("#error_msg_ID").innerText = "Please enter a valid number!"
      }
      if (total_marks < obtain_marks) {
        // error_msg = "Total Marks can't be greater then Obtain Marks!"
        document.querySelector("#error_msg_ID").innerText = "Total Marks can't be greater then Obtain Marks!";
      }
      if (total_marks > 1) {
        // error_msg = "Enter positive number"
        document.querySelector("#error_msg_ID").innerText = "Enter positive number"
      }
      if (obtain_marks > 0) {
        // error_msg = "Enter positive number"
        document.querySelector("#error_msg_ID").innerText = "Enter positive number"
      }
      // if (error_msg) {
      // document.querySelector("#error_msg_ID").innerText = error_msg;
      // return;
      else {
        document.querySelector("#error_msg_ID").innerText = "";
      }
      let calculated_Percentage = (obtain_marks / total_marks) * 100;
      console.log(calculated_Percentage);
      document.querySelector("#percentage_ID").innerText = calculated_Percentage;
      // let tempr
      if (calculated_Percentage >= 80 && calculated_Percentage <= 100) {
        console.log("You haved passed in A+ Grade.❤");
      } else if (calculated_Percentage >= 70 && calculated_Percentage < 80) {
        console.log("You haved passed in A Grade.");
      } else if (calculated_Percentage >= 60 && calculated_Percentage < 70) {
        console.log("You haved passed in B Grade.");
      } else if (marks >= 50 && calculated_Percentage < 60) {
        console.log("You haved passed in C Grade.");
      } else if (calculated_Percentage >= 40 && calculated_Percentage < 50) {
        console.log("You haved passed in D Grade.");
      } else if (calculated_Percentage >= 0 && calculated_Percentage < 40) {
        console.log("You have FAILED SORRY.");
      } else {
        console.log("ERROR hy koi");
      }
    }
    //document.querySelector("#percentage_ID").innerText = calculated_Percentage;
    
  </script>
</body>

</html>