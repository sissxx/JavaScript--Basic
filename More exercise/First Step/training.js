function training(input) {

    let w = Number(input[0] * 100);
    let h = Number(input[1] * 100);
    let allSeat = 0;
    let coridor = 100;

    let benchRow = Math.floor((h - coridor) / 70);


    let row = Math.floor(w / 120);

    allSeat = (Math.round(benchRow * row)) - 3;
    console.log(allSeat);
}
training(["8.4", "5.2"])