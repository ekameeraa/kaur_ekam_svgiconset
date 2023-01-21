console.log('Javascript is running');

let vectorBeach = document.querySelector("#vectorBeach");
let vectorBridge = document.querySelector("#vectorBridge");
let vectorCity = document.querySelector("#vectorCity");
let vectorDesert = document.querySelector("#vectorDesert");
let vectorFall = document.querySelector("#vectorFall");
let vectorForest = document.querySelector("#vectorForest");
let vectorHimalaya = document.querySelector("#vectorHimalaya");
let vectorHome = document.querySelector("#vectorHome");
let vectorMountain = document.querySelector("#vectorMountain");
let vectorRiver = document.querySelector("#vectorRiver");
let vectorScenery = document.querySelector("#vectorScenery");
let vectorSea = document.querySelector("#vectorSea");

function logID() {
    console.log(this.id);
}

vectorBeach.addEventListener('click', logID);
vectorBridge.addEventListener('click', logID);
vectorCity.addEventListener('click', logID);
vectorDesert.addEventListener('click', logID);
vectorFall.addEventListener('click', logID);
vectorForest.addEventListener('click', logID);
vectorHimalaya.addEventListener('click', logID);
vectorHome.addEventListener('click', logID);
vectorMountain.addEventListener('click', logID);
vectorRiver.addEventListener('click', logID);
vectorScenery.addEventListener('click', logID);
vectorSea.addEventListener('click', logID);