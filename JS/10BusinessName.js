//! Math.ceil = 5.7 => 6 or we can use Math.floor = 5.7 => 5
function createRandomNumber(min, max) {
    let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    let first, second, third;
    console.log(randomNum1, randomNum2, randomNum3);
    //For First Name
    if (randomNum1 == 1) {
        first = "Crazy";
    } else if (randomNum1 == 2) {
        first = "Amazing";
    } else {
        first = "Fire";
    }
    // For Second Name
    if (randomNum1 == 1) {
        second = "Engine";
    } else if (randomNum2 == 2) {
        second = "Foods";
    } else {
        second = "Garments";
    }
    //For Third Name
    if (randomNum1 == 1) {
        third = "Bros";
    } else if (randomNum2 == 2) {
        third = "Limited"
    } else {
        third = "Hub";
    }
    console.log(`Your Brand Name is: ${first} ${second} ${third}`)
}
createRandomNumber(1, 3);