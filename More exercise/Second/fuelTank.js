function tank(input) {

    let gorivo = input[0];
    let litri = Number(input[1]);
    let res = gorivo.toLowerCase();

    if (gorivo == "Gas" || gorivo == "Diesel" || gorivo == "Gasoline") {

        if (litri >= 25) {
            console.log(`You have enough ${res}.`);
        } else if (litri < 25) {
            console.log(`Fill your tank with ${res}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }

}
tank(["gg", "25"])