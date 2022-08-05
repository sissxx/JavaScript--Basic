function hotel(input) {

    let month = input[0];
    let numberOfNights = Number(input[1]);

    let studio = "";
    let apartment = "";

    switch (month) {
        case "May":
        case "October":
            studio = numberOfNights * 50;
            apartment = numberOfNights * 65;

            if (numberOfNights > 7 && numberOfNights <= 14) {

                studio = studio * 0.95;
               

            } else if (numberOfNights > 14) {
                studio = studio * 0.70;
                apartment = apartment * 0.90;

            }
            break;
        case "June":
        case "September":
            studio = 75.20 * numberOfNights;
            apartment = 68.70 * numberOfNights;

            if (numberOfNights > 14) {
                studio = studio * 0.80;
                apartment = apartment * 0.90;

            }
            break;
        case "July":
        case "August":

            studio = 76 * numberOfNights;
            apartment = 77 * numberOfNights;

            if (numberOfNights > 14) {
                apartment = apartment * 0.90;
            }
            break;

    }


    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

hotel(["August", "14"]);