var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function position(pos) {
	geoData(pos.coords.latitude,pos.coords.longitude);
}

function error(err) {
  alert("You have to allow access to your location to see datas! \n\nReset permissions and click OK!");
  location.reload();
}

navigator.geolocation.getCurrentPosition(position, error, options);

function geoData(lat,long){

	const URL = "https://api.waqi.info/feed/geo:"+lat+";"+long+"/?token=6314ce8941158332cbd37362ffd27b7f8e5d59a4";

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
	}
