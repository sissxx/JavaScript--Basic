function transport(input) {

    let nKilometers = Number(input[0]);
    let dayOrNight = input[1];
    let tax = 0;
    let taxDay = 0;
    let taxNight = 0


    if (nKilometers < 20) {
        let startTax = 0.70
        taxDay = 0.79;
        taxNight = 0.90;
        if (dayOrNight == "day") {
            tax = startTax + nKilometers * taxDay;


        } else if (dayOrNight == "night") {
            tax = startTax + nKilometers * taxNight;

        }

    } else if (nKilometers >= 100) {
        taxDay = 0.06;
        if (dayOrNight == "day" || dayOrNight == "night") {
            tax = nKilometers * taxDay;
        }


    } else if (nKilometers >= 20) {
        taxDay = 0.09;
        if (dayOrNight == "day" || dayOrNight == "night") {
            tax = nKilometers * taxDay;

        }

    }
    console.log(tax.toFixed(2));
}
transport(["180", "night"])