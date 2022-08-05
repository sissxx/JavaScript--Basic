function demo(input) {

    let workDaysMonth = Number(input[0]);
    let moneyPerDay = Number(input[1]);
    let usdToBgn = Number(input[2]);

    let sallary = workDaysMonth * moneyPerDay;
    let yearSallary = (sallary * 12) + (sallary * 2.5);
    let tax = yearSallary * 0.25;
    let taxYear = yearSallary - tax;
    let salaryInLv = taxYear * usdToBgn;

    let perDay = (salaryInLv / 365).toFixed(2);

    console.log(perDay);

}
demo(["22", "199.99", "1.50"])