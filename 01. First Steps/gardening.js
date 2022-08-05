function gardening(input) {

    let greenYard = Number(input[0]);

    let yard = greenYard * 7.61;
    let discount = 0.18 * yard;
    let sum = yard - discount;

    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
gardening(["550"]);