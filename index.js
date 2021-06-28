// Code your solution in this file!
function distanceFromHqInBlocks(block1) {
    if (block1 > 42) {
        return block1 - 42;
    }
    else {
        return 42 - block1;
    }
}

function distanceFromHqInFeet(block1) {
    if (block1 > 42) {
        return ((block1 - 42) * 264);
    }
    else {
        return ((42 - block1) * 264);
    }
}

function distanceTravelledInFeet(blck1, blck2) {
    if (blck1 > 42) {
        return ((blck2 - blck1) * 264);
    }
    else {
        return ((blck1 - blck2) * 264);
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (((distanceTravelledInFeet(start, destination) - 400) * 2) / 100)
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    else {
        return `cannot travel that far`;
    }
}