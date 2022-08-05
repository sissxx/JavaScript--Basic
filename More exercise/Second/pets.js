function pets(input) {

    let days = Number(input[0]);
    let leftFoodKg = Number(input[1]);
    let foodForDogPerDayKg = Number(input[2]);
    let catFoodPerDayKg = Number(input[3]);
    let tortuneFoodPerDayKg = Number(input[4]);

    let dog = days * foodForDogPerDayKg;
    let cat = days * catFoodPerDayKg;
    let tortune = (days * tortuneFoodPerDayKg) / 1000;

    let all = dog + cat + tortune;

    if (all <= leftFoodKg) {
        console.log(`${Math.floor(leftFoodKg - all)} kilos of food left.`);

    } else {
        console.log(`${Math.ceil(all - leftFoodKg)} more kilos of food are needed.`);
    }


}
pets(["5", "10", "2.1", "0.8", "321"])