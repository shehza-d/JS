// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <!-- e.preventDefault(); -->
// This is for consoling the Properties of Event
//     <!-- <form onsubmit="my_function(event); return false">
//         <button>sjsfj</button>
//     </form>
//     <script>
        let my_function = (e) => {
        console.log(e);
        }
//     </script> -->


//     <form onsubmit="function(event); return false">
//         <input type="text" id="input">
//     </form>
//     <script>
        let myFunction = (e)  => {
        e.preventDefault();
       let input = document.querySelector('#input');
       console.log(input);
        }   
//     </script>
// </body>
// </html>