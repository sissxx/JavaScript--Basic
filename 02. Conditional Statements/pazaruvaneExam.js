function pazaruvane(input) {

    let budget = Number(input[0]);
    let n = Number(input[1]);
    let m = Number(input[2]);
    let p = Number(input[3]);
    let sum = 0;

    let nPrice = n * 250;
    let mPrice = (0.35 * nPrice) * m;
    let pPrice = (0.1 * nPrice) * p;

    sum = (nPrice + mPrice + pPrice).toFixed(2);

    if (n > m) {
        sum = sum * 0.85;
        if (budget >= sum) {
            console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);

        } else {
            console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
        }
    }

}
pazaruvane(["920.45", "3", "1", "1"])