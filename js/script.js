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
                htmlStr += `
                <div class="mainContainer  justify-content-center align-items-center col-3">
                    <div class="cardContainer justify-content-center align-items-center col">
                        <div class="sneaker d-flex align-items-start justify-content-center">
                            <div class="circle"></div>
                            <img class="teamLogo" src=${team.WikipediaLogoUrl}>
                        </div>
                        <div class="info">
                            <h1 class="title">${team.City}</h1>
                            <h3>A RUNNER'S CHOICE, <br>EXPERIENCE THE COMFORT</h3>
                            <div class="sizes d-flex justify-content-around">
                                <p>This is some info about the team</p>
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

// These is animation Javascript code
const card = document.querySelector('.cardContainer');
const container = document.querySelector('.mainContainer');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//moving animation container
container.addEventListener("mousemove", function (e){
    // console.log(e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX) / 25;
    let yAxis = (window.innerHeight/2 - e.pageY) / 25;
    card.style.transform =  `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', function (e){
    card.style.transition = 'none';
    //POPOUT
    title.style.transform = 'translateZ(90px)';
    sneaker.style.transform = 'translateZ(90px)';
    description.style.transform = 'translateZ(80px)';
    purchase.style.transform = 'translateZ(70px)';
    sizes.style.transform = 'translateZ(65px)';

});

//Animate Out
container.addEventListener('mouseleave', function (e){
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //POPBACK
    title.style.transform ='translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
});