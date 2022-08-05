function cinema(input) {

    let projection = input[0];
    let row = Number(input[1]);
    let colomn = Number(input[2]);

    let income = 0;

    switch (projection) {
        case "Premiere":
            income = row * colomn * 12.00;
            break;
        case "Normal":
            income = row * colomn * 7.5;
            break;
        case "Discount":
            income = row * colomn * 5;
            break;

    }
    console.log(`${income.toFixed(2)} leva`);



}
cinema(["Discount", "12", "30"])