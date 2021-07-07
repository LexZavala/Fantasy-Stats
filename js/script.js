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

///// this works
const getTeams = () => {
    $.ajax(teamsParameters).done((teams) => {
        console.log(teams);
        setTimeout(function () {
            let htmlStr = '';
            for (let team of teams) {
                htmlStr += `<div><h3>${team.City}</h3></div>
            <div><img class="teamLogo" src=${team.WikipediaLogoUrl}></div>
            
            
            <div class="mainContainer d-flex justify-content-center align-items-center">
                <div class="cardContainer">
                    <div class="sneaker d-flex align-items-center justify-content-center">
                        <div class="circle"></div>
                        <img class="teamLogo" src=${team.WikipediaLogoUrl}>
                    </div>
                    <div class="info">
                        <h1 class="title">${team.City}</h1>
                        <h3>A RUNNER'S CHOICE, <br>EXPERIENCE THE COMFORT</h3>
                        <div class="sizes d-flex justify-content-around">
                            <p>This is some info about the team</p>
                        </div>
                        <div class="purchase">
                            <button class="purchaseText">Add to cart<i class="fas fa-shopping-cart"></i></button>
                        </div>
                    </div>
                </div>  
            </div>
            `
            }

            $('#teamsContainer').html(htmlStr);

        }, 1000)
    });
}

getTeams();