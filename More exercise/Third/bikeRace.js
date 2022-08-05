function bikeRace(input) {

    let juniorRacers = Number(input[0]);
    let seniorRacers = Number(input[1]);
    let race = input[2];

    let allRacers = juniorRacers + seniorRacers;
    let costs = 0;
    let sum = 0;
    let discount = 0;


    switch (race) {
        case "trail":
            juniorRacers *= 5.5;
            seniorRacers *= 7;
            sum = juniorRacers + seniorRacers;
            costs = sum * 0.95;

            break;

        case "cross-country":
            juniorRacers *= 8;
            seniorRacers *= 9.50;
            if (allRacers >= 50) {
                discount = (juniorRacers + seniorRacers) * 0.75;
                costs = discount * 0.95;
            } else {
                sum = juniorRacers + seniorRacers;
                costs = sum * 0.95;
            }

            break;
        case "downhill":
            juniorRacers *= 12.25;
            seniorRacers *= 13.75;
            sum = juniorRacers + seniorRacers;
            costs = sum * 0.95;
            break;
        case "road":
            juniorRacers *= 20;
            seniorRacers *= 21.50;
            sum = juniorRacers + seniorRacers;
            costs = sum * 0.95;
            break;


    }

    console.log(costs.toFixed(2));

}
bikeRace(["10", "10", "downhill"])