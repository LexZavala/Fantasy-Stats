"use strict";

console.log("This works");


var teamsParameters = {
    "url": "data/teams.json",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Ocp-Apim-Subscription-Key": "be8d5d8f1d234690b3a233d0055ee691"
    },
};

const getTeams = () => {
    $.ajax(teamsParameters).done((teams) => {
        console.log(teams);
        setTimeout(function (){
            let htmlStr = '';
            for (let team of teams){
                htmlStr += `<div><h3>${team.City}</h3></div>`
            }

            $('#teamsContainer').html(htmlStr);

        }, 1000)
    });
}

getTeams();