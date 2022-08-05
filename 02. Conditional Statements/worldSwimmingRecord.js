function swimm(input) {

    let seconds = Number(input[0]);
    let distance = Number(input[1]);
    let distanceSeconds = Number(input[2]);

    let swim = distance * distanceSeconds;
    let delayTime = Math.floor(distance / 15) * 12.5;

    let total = swim + delayTime;

    if (total < seconds) {
        console.log(` Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`);

    } else {
        console.log(`No, he failed! He was ${(total - seconds).toFixed(2)} seconds slower.`);

    }

}
swimm(["10464", "1500", "20"]);