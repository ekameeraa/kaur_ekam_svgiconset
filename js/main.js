console.log('Javascript is running');

let vectorAdd = document.querySelector("#vectorAdd");
let vectorAirplane = document.querySelector("#vectorcryAirplane");
let vectorStar = document.querySelector("#vectorStar");
let vectorDelete = document.querySelector("#vectorDelete");
let vectorHome = document.querySelector("#vectorHome");
let vectorIntegral = document.querySelector("#vectorcryIntegral");
let vectorLess = document.querySelector("#vectorLess");
let vectorMenu = document.querySelector("#vectorMenu");
let vectorMine = document.querySelector("#vectorMine");
let vectorRemember = document.querySelector("#vectorRemember");

function logID() {
    console.log(this.id);
}

vectorAdd.addEventListener('click',logID);
vectorAirplane.addEventListener('click', logID);
vectorStar.addEventListener('click', logID);
vectorDelete.addEventListener('click', logID);
vectorHome.addEventListener('click', logID);
vectorIntegral.addEventListener('click', logID);
vectorLess.addEventListener('click', logID);
vectorMenu.addEventListener('click', logID);
vectorMine.addEventListener('click', logID);
vectorRemember.addEventListener('click', logID);