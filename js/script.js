"use strict";

console.log("This works");


var settings = {
    "url": "data/teams.json",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Ocp-Apim-Subscription-Key": "be8d5d8f1d234690b3a233d0055ee691"
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
});