function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let money = "";
    let destination = "";
    let typeOfHoliday = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                money = budget * 0.30;

                break;
            case "winter":
                money = budget * 0.70;
                break;

        }
    } else if (budget <= 1000) {
        destination = "Balkans";

        switch (season) {
            case "summer":
                money = budget * 0.40;
                break;
            case "winter":
                money = budget * 0.80;
                break;

        }
    } else {
        destination = "Europe";
        money = budget * 0.9;


    }

    console.log(`Somewhere in ${destination}`);

    if (season === "summer" && destination !== "Europe") {
        typeOfHoliday = "Camp"

    } else {
        typeOfHoliday = "Hotel"
    }

    console.log(`${typeOfHoliday} - ${(money).toFixed(2)}`);

}



journey(["1500", "summer"])