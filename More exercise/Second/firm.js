function firm(input) {

    let hoursNeeded = Number(input[0]);
    let daysHave = Number(input[1]);
    let employeesOverTime = Number(input[2]);

    let obuchenie = daysHave * 0.90; // 10% от които отиват за обучение от daysLeft

    let hoursLeft = obuchenie * 8; // оставащи часове за работа
    employeesOverTime *= 2 * daysHave; // ичвънредните часове 
    let allTime = Math.floor(hoursLeft + employeesOverTime); // общо оставащите с извънредните 


    if (allTime >= hoursNeeded) {
        console.log(`Yes!${allTime-hoursNeeded} hours left.`);

    } else {

        console.log(`Not enough time!${Math.floor(hoursNeeded - allTime)} hours needed.`);
    }

}

firm(["90", "7", "3"]);