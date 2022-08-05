function market(input) {

    let strawberryPrice = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberry = Number(input[3]);
    let strawberry = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice - (raspberryPrice * 0.4);
    let bananasPrice = raspberryPrice - (raspberryPrice * 0.8);

    let raspberrySum = raspberry * raspberryPrice;
    let orangesSum = oranges * orangesPrice;
    let bananasSum = bananas * bananasPrice;
    let strawberrySum = strawberry * strawberryPrice;

    let sum = raspberrySum + orangesSum + strawberrySum + bananasSum;

    console.log(sum);

}
market(['48', '10', '3.3', '6.5', '1.7']);