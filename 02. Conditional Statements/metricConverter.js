function meter(input) {
    let num = Number(input[0]);
    let inputMeter = input[1];
    let outputMeter = input[2];

    if (inputMeter === "mm") {
        num = num / 1000;
    } else if (inputMeter === "cm") {
        num = num / 100;
    } else {
        num = num;
    }
    let result = 0;

    if (outputMeter === "m") {
        console.log(num.toFixed(3));
    } else if (outputMeter === "cm") {
        console.log((num * 100).toFixed(3));
    } else if (outputMeter === "mm") {
        console.log((num * 1000).toFixed(3));
    }


}
meter(["45", "cm", "mm"]);