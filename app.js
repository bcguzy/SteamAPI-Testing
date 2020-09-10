'use strict';

//document.getElementById("change").innerHTML = "Hello World";
function getPlayerInfo(){
    var key = 'F5712EEA8ED9B25B21216D391A90BA41'; //openweathermap key
    fetch('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=21AD387946B549C0C2F0A5AEE0E0A308&steamids=76561197960435530')
    .then(response => response.json())
    .then(data => console.log(data));
}

