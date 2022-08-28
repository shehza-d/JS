<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<!-- 
		https://www.youtube.com/watch?v=d4PN2rJD98g&ab_channel=CodeWithHarry
		https://youtu.be/d4PN2rJD98g
	Browser events:
    click
    contextmenu
    mouseover/mouseout  
    mousedown/mouseup
    mousemove

    submit 
    focus

    DOMContentLoaded

    transitionend -->
</head>

<body>
	<button onclick="toggleShow()">Show/Hide</button>
	<p id="para" style="border: 3px solid red ;">Paragraph hover with JavaScrip eventListner not CSS
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,nihil! Numquam commodi earumquaerat blanditiis enim, distinctio, cumque, dolor iure dolorem non debitis quos exercitationem magnam delectussequi nostrum? Accusantium, sed laborum rem omnis tempora provident itaque minima iusto commodi unde maximeiurequis necessitatibus id at totam quaerat corporis quia. Nihil, iure hic fugiat possimus culpa sit earumveniameos excepturi sapiente dicta adipisci soluta facere enim aliquam et repellat sint veritatis. Vero, iustoharum,aut eum commodi enim eos voluptas repellat rerum praesentium illo molestiae quidem, ipsam minima veritatisquamdolorum earum quo sapiente facilis impedit. Qui ipsam neque ea aperiam porro beatae doloremque, deseruntsuntquidem commodi provident recusandae deleniti illum? Minus expedita ipsum laborum nihil non velitbeatae corruptidolore omnis odio! Repudiandae commodi, sed debitis fugiat doloremque reprehenderit cupiditate,alias laborumoptio minus tempore vero?</p>
	<script>
		// using all es6 latest syntax 
		// let para1 = document.querySelector("#para");

		para1.addEventListener('mouseover', function run() {
			para1.style.background = 'red';
		});
		para1.addEventListener('mouseout', function run() {
			para1.style.background = '';
		});



		let toggleShow = () => {

			// let para1 = document.querySelector("#para");
			if (para1.style.display != 'none'
			) {
				para1.style.display = 'none'
			} else {
				para1.style.display = 'block'
			}
		}

	</script>
</body>

</html>