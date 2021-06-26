"use strict";

console.log("This works");

var settings = {
    "url": "https://fly.sportsdata.io/v3/nfl/scores/json/Teams",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Ocp-Apim-Subscription-Key": "be8d5d8f1d234690b3a233d0055ee691"
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

// var settings = {
//     "url": "https://api.sportradar.us/nfl/official/trial/v6/en/games/0e00303b-ee60-4cf4-ad68-48efbe53901d/roster.json?api_key=x4dm5njwga2ypu6qjc7grfsg",
//     "method": "GET",
//     "timeout": 0,
// };
//
// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// let getOptions = {
//     method: 'GET',
//     'X-Originating-IP': '70.121.129.79',
//     headers: {
//         'Content-Type': 'application/json',
//         'Date':'Sat, 26 Jun 2021 17:50:53 GMT',
//         'Server': 'Mashery Proxy',
//         'X-Error-Detail-Header': 'Account Inactive',
//         'X-Mashery-Error-Code': 'ERR_403_DEVELOPER_INACTIVE',
//         'X-Mashery-Responder': 'prod-j-worker-us-east-1d-56.mashery.com',
//         'Content-Length': '27',
//         'Connection': 'keep-alive'
//     }
// };
//
// const apiCall = () => {
//     // fetch("http://api.sportradar.us/nfl/official/trial/v6/en/games/0e00303b-ee60-4cf4-ad68-48efbe53901d/roster.json?api_key=x4dm5njwga2ypu6qjc7grfsg", getOptions)
//     //     .then(resp => resp.json());
//     $.ajax("http://api.sportradar.us/nfl/official/trial/v6/en/games/0e00303b-ee60-4cf4-ad68-48efbe53901d/roster.json?api_key=x4dm5njwga2ypu6qjc7grfsg")
//         .done(resp => resp.json());
// }
//
//
// console.log(apiCall());