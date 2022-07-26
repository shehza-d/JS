// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Location</title>
// </head>

// <body>
// 	<h1>Location</h1>
// 	<script>
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			alert("Access deined or Geolocation is not supported by this browser.");
		}
		function showPosition(position) {
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			console.log("latitude: " + latitude);
			console.log("longitude: " + longitude);
		}
		function showError(error) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					alert("User denied the request for Geolocation.");
					break;
				case error.POSITION_UNAVAILABLE:
					alert("Location information is unavailable.");
					break;
				case error.TIMEOUT:
					alert("The request to get user location timed out.");
					break;
				case error.UNKNOWN_ERROR:
					alert("An unknown error occurred.");
					break;
			}
		}
// 	 </script>
// </body>

// </html> 