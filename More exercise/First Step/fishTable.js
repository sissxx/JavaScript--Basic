function fishTable(input) {

    let scumriaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamudPrice = Number(input[2]);
    let safridPrice = Number(input[3]);
    let midiPrice = Number(input[4]);
    let all = 0;
    palamudPrice *= scumriaPrice + (scumriaPrice * 0.6);
    safridPrice *= cacaPrice + (cacaPrice * 0.8);
    midiPrice *= 7.50;

    all = palamudPrice + safridPrice + midiPrice;
    console.log(all.toFixed(2));

}
fishTable(["5.55", "3.57", "4.3", "3.6", "7"])