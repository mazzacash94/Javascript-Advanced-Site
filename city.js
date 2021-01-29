function position() {
	let citySearch = document.getElementById("search").value; 
	geoData(citySearch);
}

function geoData(city){

	const URL = "https://api.waqi.info/feed/"+city+"/?token=6314ce8941158332cbd37362ffd27b7f8e5d59a4";

	axios.get(URL)
		.then(function (response){
			let cityData = response["data"]["data"]["city"];
			let airData = response["data"]["data"]["iaqi"];
			let timeData = response["data"]["data"]["time"];
			document.getElementById("1").innerHTML += cityData["name"];
			document.getElementById("2").innerHTML += airData["no2"]["v"];
			document.getElementById("3").innerHTML += airData["o3"]["v"];
			document.getElementById("4").innerHTML += airData["pm10"]["v"];
			document.getElementById("5").innerHTML += airData["pm25"]["v"];
			document.getElementById("6").innerHTML += airData["h"]["v"];
			document.getElementById("7").innerHTML += airData["p"]["v"];
			document.getElementById("8").innerHTML += airData["t"]["v"];
			document.getElementById("9").innerHTML += timeData["s"];
			})
		.catch(error => {
			let again = prompt("Location entered was not found! Try to enter again:\n\n");
			geoData(again);
			})
	}
