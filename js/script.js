"use strict";

console.log("This works");

let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Date':'Sat, 26 Jun 2021 17:50:53 GMT',
        'Server': 'Mashery Proxy',
        'X-Error-Detail-Header': 'Account Inactive',
        'X-Mashery-Error-Code': 'ERR_403_DEVELOPER_INACTIVE',
        'X-Mashery-Responder': 'prod-j-worker-us-east-1d-56.mashery.com',
        'Content-Length': '27',
        'Connection': 'keep-alive'
    }
};

const apiCall = () => {
    fetch("http://api.sportradar.us/nfl/official/trial/v6/en/games/0e00303b-ee60-4cf4-ad68-48efbe53901d/roster.json?api_key=x4dm5njwga2ypu6qjc7grfsg", getOptions)
        .then(resp => resp.json());
}

console.log(apiCall());