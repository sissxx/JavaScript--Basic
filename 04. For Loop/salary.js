function job(input) {

    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 1; i <= input.length - 1; i++) {
        let current = input[i];

        switch (current) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }

    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }


}
job(["3", "500", "Facebook","Stackoverflow.com","softuni.bg"])