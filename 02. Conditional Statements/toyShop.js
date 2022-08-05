function toy(input) {

    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let count = puzzle + dolls + bears + minions + trucks;
    let money = puzzle * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if (count >= 50) {
        money = money * 0.75;
    }

    money = money * 0.9;

    if (money >= tripPrice) {

        console.log(`Yes! ${(money - tripPrice).toFixed(2) } lv left.`);

    } else {
        console.log(`Not enough money! ${Math.abs(money-tripPrice).toFixed(2)} lv needed.`);
    }


}
toy(["320", "8", "2", "5", "5", "1"])