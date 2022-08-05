function skiTrip(input) {

    let days = Number(input[0]) - 1;
    let room = input[1];
    let rating = input[2];
    let price = "";

    if (days < 10) {
        switch (room) {
            case "room for one person":
                price = days * 18.00;
                break;
            case "apartment":
                price = days * 25.00;
                price = price * 0.70;
                break;
            case "president apartment":
                price = days * 35.00;
                price = price * 0.90;
                break;

        }

    } else if (days >= 10 && days < 15) {
        switch (room) {
            case "room for one person":
                price = days * 18.00;
                break;
            case "apartment":
                price = days * 25.00;
                price = price * 0.65;
                break;
            case "president apartment":
                price = days * 35.00;
                price = price * 0.85;
                break;

        }

    } else if (days > 15) {
        switch (room) {
            case "room for one person":
                price = days * 18.00;
                break;
            case "apartment":
                price = days * 25.00;
                price = price * 0.50;
                break;
            case "president apartment":
                price = days * 35.00;
                price = price * 0.80;
                break;

        }
    }
    if (rating === "positive") {
        price = (price * 0.25) + price;


    } else {
        price = price - (price * 0.1);

    }


    console.log((price).toFixed(2));

}
skiTrip(["2", "apartment", "positive"])