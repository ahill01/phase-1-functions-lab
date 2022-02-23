// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
const distance = pickUp - 42;
return Math.abs(distance);
}

function distanceFromHqInFeet(pickUp){
const blockDistance = distanceFromHqInBlocks(pickUp);
const ftDistance = blockDistance*264;
    return ftDistance;
}

function distanceTravelledInFeet(start, destination){
const traveled = (destination-start)*264;
return Math.abs(traveled);
}

function calculatesFarePrice(start,destination) {
 const distanceTravelled = distanceTravelledInFeet(start,destination);
 if(distanceTravelled<400){
     return 0
 } else if (distanceTravelled > 400 && distanceTravelled < 2000){
    const chargedDist = distanceTravelled - 400; 
    return chargedDist*.02;
 } else if (distanceTravelled < 2500 && distanceTravelled > 2000){
     return 25;
 } else {
     return "cannot travel that far";
 }
}