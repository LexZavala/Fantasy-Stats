"use strict";

console.log("This works");


// var teamsParameters = {
//     "url": "data/teams.json",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//         "Ocp-Apim-Subscription-Key": "be8d5d8f1d234690b3a233d0055ee691"
//     },
// };
//
// var settings = {
//     "url": "https://fly.sportsdata.io/v3/nfl/scores/json/Teams",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//         "Ocp-Apim-Subscription-Key": "be8d5d8f1d234690b3a233d0055ee691"
//     },
// };
//
// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

var myHeaders = new Headers();
myHeaders.append("Ocp-Apim-Subscription-Key", "be8d5d8f1d234690b3a233d0055ee691");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://fly.sportsdata.io/v3/nfl/scores/json/Stadiums", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


///// this works
// const getTeams = () => {
//     $.ajax(teamsParameters).done((teams) => {
//         console.log(teams);
//         setTimeout(function (){
//             let htmlStr = '';
//             for (let team of teams){
//                 htmlStr += `<div><h3>${team.City}</h3></div>
//             <div><img class="teamLogo" src=${team.WikipediaLogoUrl}></div>
//             `
//             }
//
//             $('#teamsContainer').html(htmlStr);
//
//         }, 1000)
//     });
// }
//
// getTeams();