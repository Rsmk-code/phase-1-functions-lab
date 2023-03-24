// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    if(pickupLocation >= 42){
        return pickupLocation -42;
    }else{
        return 42-pickupLocation;
    }
}


function distanceFromHqInFeet(pickupLocation){
   return distanceFromHqInBlocks(pickupLocation) * 264;
}


function distanceTravelledInFeet(start, destination){
    let distance = Math.abs(destination - start) * 264;
    return distance;
}


function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <=400) {
        fare = 0;
    }else if (distance <=2000){
        fare = (distance - 400) * 0.02;
    }else if (distance <= 2500){
        fare = 25;
    }else {
        return 'cannot travel that far';
    }
    return fare;
}