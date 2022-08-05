function nadejda(input) {

    let moneyNeed = Number(input[0]);
    let moneyHave = Number(input[1]);
    let index = 2;

    let days = 0;
    let daysSpend = 0;


    while (moneyHave < moneyNeed) {

        let operation = input[index++];
        let sum = Number(input[index]);

        if (operation === "spend") {
            days++;
            daysSpend++;

            if (moneyHave < sum) {
                moneyHave = 0
            } else {
                moneyHave -= sum;
            }

        } else if (operation === "save") {
            daysSpend = 0;
            days++;
            moneyHave += sum;
        }
        index++;

        if (moneyNeed <= moneyHave) {
            console.log(`You saved the money for ${days} days.`);
            break;
        } else if (daysSpend === 5) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        }
    }

}
nadejda
    (["250",
        "150",
        "spend",
        "50",
        "spend",
        "50",
        "save",
        "100",
        "save",
        "100"
    ])