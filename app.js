'use strict';
  
//document.getElementById("change").innerHTML = "Hello World";
function getPlayerInfo(){
    fetch('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=1FBE4A2A938B56E4B696B13F88A04DBF&steamids=76561197960435530',{
        mode: 'cors'
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    }
    )
    .then(response => response.json())
    .then(data => console.log(data));
}

