function cinema(input) {
    let ticket = input[0];

    if (ticket == "Monday" || ticket == "Tuesday" || ticket == "Friday") {
        console.log("12");
    } else if (ticket == "Wednesday" || ticket == "Thursday") {
        console.log("14");
    } else {
        console.log("16");
    }

}
cinema(["Sunday"])