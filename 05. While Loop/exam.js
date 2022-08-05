function solve(input) {

    let countDograma = Number(input[0]);
    let sort = input[1];
    let delivery = input[2];
    let price = 0;

    switch (sort) {
        case "90X130":
            price = countDograma * 110;
            if (countDograma > 60) {
                price = price - (price * 0.08);
            } else if (countDograma > 30) {
                price = price - (price * 0.05);
            }
            break;
        case "100X150":
            price = countDograma * 140;
            if (countDograma >= 80) {
                price = price - (price * 0.1);
            } else if (countDograma > 40) {
                price = price - (price * 0.6);
            }

            break;
        case "130X180":
            price = countDograma * 190;
            if (countDograma > 50) {
                price = price - (price * 0.12);
            } else if (countDograma > 20) {
                price = price - (price * 0.07);
            }
            break;
        case "200X300":
            price = countDograma * 250;
            if (countDograma > 50) {
                price = price - (price * 0.14);
            } else if (countDograma > 25) {
                price = price - (price * 0.09);
            }
            break;
    }

    if (delivery === "With delivery") {
        price += 60;

    }
    else if (countDograma > 99) {
        price = price - (price * 0.04);
    }
    else if (countDograma < 10) {
        console.log("Invalid order");

    }


    console.log(`${price.toFixed(2)} BGN`);

}
solve(["1", "90X130", "Without delivery"])