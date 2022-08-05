function campaign(input) {

    let days = Number(input[0]);
    let bakers = Number(input[1]);
    let cakeCount = Number(input[2]);
    let waffleCount = Number(input[3]);
    let pancakesCount = Number(input[4]);

    let cake = cakeCount * 45;
    let waffle = waffleCount * 5.80;
    let pancakes = pancakesCount * 3.20;

    let sumPerDay = (pancakes + cake + waffle) * bakers;
    let allSum = sumPerDay * days;
    let pureSum = allSum - (allSum / 8);

    console.log(pureSum);

}
campaign(['131', '5', '9', '33', '46'])