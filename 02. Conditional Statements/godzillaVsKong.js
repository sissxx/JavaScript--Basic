function godzilla(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.1;
    let priceClothes = people * clothesPrice;


    if (people >= 150) {
        priceClothes = priceClothes * 0.9;

    }

    let total = decor + priceClothes;

    if (decor + priceClothes > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);

    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }

}
godzilla(["9587.88", "222", "55.68"]);