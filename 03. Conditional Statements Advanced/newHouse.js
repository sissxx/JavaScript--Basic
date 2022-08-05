function newHouse(input) {

    let flower = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let total = "";

    if (flower === "Roses") {
        total = numberOfFlowers * 5.00;
        if (numberOfFlowers > 80) {

            total = total * 0.90;

        }

    } else if (flower === "Dahlias") {
        total = numberOfFlowers * 3.8;
        if (numberOfFlowers > 90) {
            total = total * 0.85;

        }

    } else if (flower === "Tulips") {
        total = numberOfFlowers * 2.8;
        if (numberOfFlowers > 80) {

            total = total * 0.85;

        }

    } else if (flower === "Narcissus") {
        total = numberOfFlowers * 3;
        if (numberOfFlowers < 120) {

            total = total * 1.15;

        }

    } else if (flower === "Gladiolus") {
        total = numberOfFlowers * 2.5;
        if (numberOfFlowers < 80) {

            total = total * 1.20;
        }

    }

    if (total > budget) {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${(budget -total).toFixed(2)} leva left.`);
    }


}
newHouse(["Narcissus", "119", "360"])