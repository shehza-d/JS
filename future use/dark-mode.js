<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

har mode ky liye alag CSS file banalo simple
	<link rel="stylesheet" href="./src/lightmode.css" media="(prefers-color-scheme: light)">
	<link rel="stylesheet" href="./src/darkmode.css" media="(prefers-color-scheme: dark)">

	<title>Document</title>
	<style>
		body {
			padding: 25px;
			background-color: white;
			color: black;
			font-size: 25px;
		}
/* @media (prefers-color-scheme: [idher (dark) bhi aa sagta hy aur (light)bhi  ]) aur best practice ye nhi ky dono use kiye jae balay ak defaul hoga jese white jokay css ma define hoga aur dark usko media se karna hy*/
		@media (prefers-color-scheme: dark) {
			body {
				background: #222222;
				color: white;
			}
		}

		.dark-mode {
			background-color: black;
			color: white;
		}
		.light-mode {
			background-color: white;
			color: black;
		}
	</style>
</head>

<body>
	<h1>GeeksForGeeks</h1>

	<p>
		This is a sample GeeksForGeeks Text.
		Dark Mode Websites using Html CSS &
		Javascript
	</p>

	<img src="https://media.geeksforgeeks.org/wp-content/uploads/20200122115631/GeeksforGeeks210.png" />
	<h3 id="DarkModetext">Dark Mode is OFF</h3>
	<button onclick="darkMode()">Darkmode</button>
	<button onclick="lightMode()">LightMode</button>

	<svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
		class="octicon octicon-mark-github v-align-middle">
		<path fill-rule="evenodd"
			d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
		</path>
	</svg>
	<img src="./github-brands.svg" alt="" width="60px">

	<script>
/*Detection theme with JS*/
window.matchMedia("(prefers-color-scheme: dark)").matches //ye return kaare ga ture ya false base on system theme



// copilot code
// .addEventListener("change", e => {
//   if (e.matches) {
// 	document.body.classList.add("dark-mode");
// 	console.log("Dark Mode is ON");
//   } else {
// 	document.body.classList.remove("dark-mode");
// 	console.log("Dark Mode is OFF");
//   }
// }


	function darkMode() {
		var element = document.body;
		var content = document.getElementById("DarkModetext");
		element.className = "dark-mode";
		content.innerText = "Dark Mode is ON";
	}
	function lightMode() {
		var element = document.body;
		var content = document.getElementById("DarkModetext");
		element.className = "light-mode";
		content.innerText = "Dark Mode is OFF";
	}
	</script>
</body>

</html>