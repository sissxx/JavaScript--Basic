function turist(input) {

    let town = input[0];
    let packetExtra = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);
    let price = 0;
    let allPrice = 0;

    switch (town) {
        case "Bansko":
        case "Borovets":
            if (packetExtra === "withEquipment") {

                price = 100;
                if (vipDiscount === "yes") {
                    price = price * 0.1;
                }

            } else if (packetExtra === "noEquipment") {
                price = 80;
                if (vipDiscount === "yes") {
                    price = price - (price * 0.05);

                }
            }
            allPrice = price * days;

            break;
        case "Varna":
        case "Burgas":
            if (packetExtra === "withBreakfast") {

                price = 130;
                if (vipDiscount === "yes") {
                    price = price - (price * 0.12);
                }

            } else if (packetExtra === "noBreakfast") {
                price = 100;
                if (vipDiscount === "yes") {
                    price = price - (price * 0.07);
                }
            }
            allPrice = price * days;

            break;
        default:
            console.log("invalid");
            break;
            
    }

    if (days < 1) {
        console.log("Days must be positive number!");

    }
    console.log(`The price is ${allPrice.toFixed(2)}lv! Have a nice time!`);
    
}
turist(["Varna", "withBreakfast", "yes", "5"])