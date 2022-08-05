function vacationBook(input) {

    let pagesBook = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);

    console.log((pagesBook / pagesForHour) / days);

}
vacationBook(['212', '20', '2'])