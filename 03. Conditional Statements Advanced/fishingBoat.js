function fishing(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFisher = Number(input[2]);

    let totalMoney = 0;


    if (season === "Spring") {
        if (numberOfFisher <= 6) {
            totalMoney = 3000 * 0.9;
        } else if (numberOfFisher >= 7 && numberOfFisher <= 11) {
            totalMoney = 3000 * 0.85;
        } else if (numberOfFisher >= 12) {
            totalMoney = 3000 * 0.75;
        }

    } else if (season === "Summer" || season == "Autumn") {
        if (numberOfFisher <= 6) {
            totalMoney = 4200 * 0.9;
        } else if (numberOfFisher >= 7 && numberOfFisher <= 11) {
            totalMoney = 4200 * 0.85;

        } else if (numberOfFisher >= 12) {
            totalMoney = 4200 * 0.75;
        }

    } else if (season === "Winter") {
        if (numberOfFisher <= 6) {
            totalMoney = 2600 * 0.9;
        } else if (numberOfFisher >= 7 && numberOfFisher <= 11) {
            totalMoney = 2600 * 0.85;
        } else if (numberOfFisher >= 12) {
            totalMoney = 2600 * 0.75;

        }

    }

    if ((numberOfFisher % 2 == 0) && season !== "Autumn") {
        totalMoney = totalMoney * 0.95;
    }


    if (totalMoney > budget) {
        console.log(`Not enough money! You need ${(totalMoney - budget).toFixed(2)} leva.`);

    } else {
        console.log(`Yes! You have ${(budget - totalMoney).toFixed(2)} leva left.`);
    }


    // if (budget >= totalMoney) {
    //     console.log(`Yes! You have ${(budget - totalMoney).toFixed(2)} leva left.`);
    // } else {
    //     console.log(`Not enough money! You need ${(totalMoney - budget).toFixed(2)} leva.`);
    // }

}

fishing(["3780", "Autumn", "6"]);