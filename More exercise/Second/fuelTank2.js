function tank(input) {

    let typeOfGas = input[0];
    let quantity = Number(input[1]);
    let cardDiscount = input[2];
    let discountCard = 0;
    let fuel = 0;

    switch (typeOfGas) {
        case "Gasoline":

            let gasoline = 2.22;
            if (cardDiscount == "Yes") {
                discountCard = gasoline - 0.18;
                fuel = quantity * discountCard;
                if (quantity > 25) {
                    fuel *= 0.9;

                } else if (quantity >= 20 && quantity <= 25) {
                    fuel *= 0.92;
                }
            } else if (cardDiscount == "No") {
                fuel = quantity * gasoline;
                if (quantity > 25) {
                    fuel *= 0.9;

                } else if (quantity >= 20 && quantity <= 25) {
                    fuel *= 0.92;
                }
            }
            break;
        case "Gas":
            let gas = 0.93;
            if (cardDiscount == "Yes") {
                discountCard = gas - 0.08;
                fuel = quantity * discountCard;
                if (quantity > 25) {
                    fuel *= 0.9;

                } else if (quantity >= 20 && quantity <= 25) {
                    fuel *= 0.92;
                }
            } else if (cardDiscount == "No") {
                fuel = quantity * gas;
                if (quantity > 25) {
                    fuel *= 0.9;

                } else if (quantity >= 20 && quantity <= 25) {
                    fuel *= 0.92;
                }
            }

            break;
        case "Diesel":
            let diesel = 2.33;
            if (cardDiscount == "Yes") {
                discountCard = diesel - 0.12;
                fuel = quantity * discountCard;
                if (quantity > 25) {
                    fuel *= 0.9;

                } else if (quantity >= 20 && quantity <= 25) {
                    fuel *= 0.92;
                }
            } else if (cardDiscount == "No") {
                fuel = quantity * diesel;
                if (quantity > 25) {
                    fuel *= 0.9;

                } else if (quantity >= 20 && quantity <= 25) {
                    fuel *= 0.92;
                }
            }
            break;

    }
    console.log(`${fuel.toFixed(2)} lv.`);

}
tank(["Gasoline", "25", "No"])