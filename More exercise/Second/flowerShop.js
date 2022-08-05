function shop(input) {

    let magnolii = Number(input[0]);
    let zumbiul = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let priceGift = Number(input[4]);

    let priceMagnolii = 3.25;
    let priceZumbiul = 4;
    let priceRoses = 3.50;
    let priceCactus = 8;

    let allPrice = magnolii * priceMagnolii + zumbiul * priceZumbiul + roses * priceRoses + cactus * priceCactus;

    let tax = allPrice * 0.95;

    if (priceGift > tax) {
        console.log(`She will have to borrow ${Math.ceil(priceGift-tax)} leva.`);

    } else {
        console.log(`She is left with ${Math.floor(tax-priceGift)} leva.`);
    }


}
shop(["15", "7", "5", "10", "100"])