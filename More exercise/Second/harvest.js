function harvest(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let employees = Number(input[3]);


    let wine = ((x * y) * 0.4) / 2.5;

    if (wine < z) {
        let nedostigWine = z - wine;
        console.log(`It will be a tough winter! More ${Math.floor(nedostigWine)} liters wine needed.`);

    } else if (wine >= z) {

        let restWine = Math.ceil(wine - z);
        let literForEmployees = Math.ceil(restWine / employees);
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${restWine} liters left -> ${literForEmployees} liters per person.`);
    }

}
harvest(["1020", "1.5", "425", "4"])