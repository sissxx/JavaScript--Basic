function school(input) {

    let money = Number(input[0]);
    let success = Number(input[1]);
    let minSalary = Number(input[2]);

    let socialSchoolship = 0.35 * minSalary;
    let excellentScholarship = success * 25;

    if (success >= 5.5) {
        if ((excellentScholarship >= socialSchoolship) || (money > minSalary)) {
            console.log(`You get a Social scholarship ${Math.floor(exellentScholarship)} BGN`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialSchoolship)} BGN`);

        }
    } else if ((money < minSalary) && (success > 4.5)) {
        console.log(`You get a Social scholarship ${Math.floor(socialSchoolship)} BGN`);

    } else {
        console.log("You cannot get a scholarship!");
    }


}
school
    (["300.00",
        "5.65",
        "420.00"
    ])