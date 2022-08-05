function speed(input) {

    let speedScore = Number(input[0]);

    if (speedScore <= 10) {
        console.log("slow");
    } else if (speedScore <= 50) {
        console.log("average");
    } else if (speedScore <= 150) {
        console.log("fast");
    } else if (speedScore <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }

}
speed(["50"]);