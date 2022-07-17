<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- military grade aur improtant software ma ye Math.random use nhi hota kyu ky ye function guess ho sagta hy -->
</head>

<body>
    <script>

        let min = 10;
        let max = 20;

        let random = Math.floor(Math.random() * (max - min) + min);
        console.log(random);
    </script>
</body>

</html>