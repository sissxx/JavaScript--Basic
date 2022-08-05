function market(input) {

    let priceVegi = Number(input[0]);
    let priceFruty = Number(input[1]);
    let allVegi = Number(input[2]);
    let allFruty = Number(input[3]);

    let euro = 1.94;
    priceFruty *= allFruty;
    priceVegi *= allVegi;

    let all = 0;
    all = (priceFruty + priceVegi) / euro;
    console.log(all.toFixed(2));

}
market(["0.194", "19.4", "10", "10"])