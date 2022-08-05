function old(input) {

    let book = input[0];
    let index = 1;
    let bookSheWant = false;

    let otherBook = input[index];

    while (otherBook !== "No More Books") {
        if (otherBook === book) {
            bookSheWant = true;
            break;

        }
        index++;
        otherBook = input[index];


    }
    if (bookSheWant === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }


}
old
(["Troy",
"Stronger",
"Life Style",
"Troy"])
