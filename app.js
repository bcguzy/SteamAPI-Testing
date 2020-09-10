'use strict';

//document.getElementById("change").innerHTML = "Hello World";
function getPlayerInfo(){
    var key = '43B2EAC6404A2AADBB1A066159365544'; //openweathermap key
    fetch('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=21AD387946B549C0C2F0A5AEE0E0A308&steamids=76561197960435530')
    .then(response => response.json())
    .then(data => console.log(data));
}

