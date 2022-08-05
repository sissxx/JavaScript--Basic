function shop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let amount = Number(input[2]);



    switch (fruit) {
        case "banana":
            if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {

                console.log((amount * 2.5).toFixed(2));

            } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
                console.log((amount * 2.7).toFixed(2));

            } else {
                console.log("error");

            }
            break;
        case "apple":
            if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {


                console.log((amount * 1.2).toFixed(2));

            } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {

                console.log((amount * 1.25).toFixed(2));

            } else {
                console.log("error");

            }



            break;
        case "orange":
            if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {

                console.log((amount * 0.85).toFixed(2));

            } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
                console.log((amount * 0.9).toFixed(2));

            } else {
                console.log("error");

            }


            break;
        case "grapefruit":
            if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {

                console.log((amount * 1.45).toFixed(2));

            } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {

                console.log((amount * 1.6).toFixed(2));
            } else {
                console.log("error");

            }



            break;
        case "kiwi":
            if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {

                console.log((amount * 2.7).toFixed(2));

            } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {

                console.log((amount * 3.0).toFixed(2));
            } else {
                console.log("error");

            }


            break;
        case "pineapple":
            if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {

                console.log((amount * 5.5).toFixed(2));

            } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
                console.log((amount * 5.6).toFixed(2));

            } else {
                console.log("error");

            }

            break;
        case "grapes":
            if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {

                console.log((amount * 3.85).toFixed(2));

            } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {

                console.log((amount * 4.2).toFixed(2));
            } else {
                console.log("error");

            }



            break;
        default:
            console.log("error");
    }


}




shop(["apple", "djday", "3"])