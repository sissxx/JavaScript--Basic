function match(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleInGroup = Number(input[2]);
    //•	VIP – 499.99 лева.
    // •	Normal – 249.99 лева.
    let transport = 0;
    let normal = 249.99;
    let vip = 499.99;
    let leftMoney = 0;



    if (peopleInGroup >= 1 && peopleInGroup <= 4) {
        transport = budget * 0.25;


    } else if (peopleInGroup >= 5 && peopleInGroup <= 9) {
        transport = budget * 0.40;

    } else if (peopleInGroup >= 10 && peopleInGroup <= 24) {
        transport = budget * 0.50;

    } else if (peopleInGroup >= 25 && peopleInGroup <= 49) {
        transport = budget * 0.60;

    } else if (peopleInGroup >= 50) {
        transport = budget * 0.75;

    }


    if (category == "Normal") {
        normal *= peopleInGroup;
        if (normal < transport) {
            leftMoney = transport - normal;
            console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${transport-normal} leva.`);
        }

    } else if (category == "VIP") {
        vip *= peopleInGroup;
        if (vip < transport) {
            leftMoney = transport - vip;
            console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${(vip-transport).toFixed(2)} leva.`);
        }
    }

}

match(["30000", "VIP", "49"])