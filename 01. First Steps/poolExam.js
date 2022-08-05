function poolParty(input) {

    let people = Number(input[0]);
    let tax = Number(input[1]);
    let bedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);
    let sum = 0;
    //Math.ceil

    sum = people * tax;
    let peopleWithBed = Math.ceil(people * 0.75);
    let bed = bedPrice * peopleWithBed;
 
    let peopleWithUmbrella = Math.ceil(people * 0.5);
 
    let umbrella  = umbrellaPrice * peopleWithUmbrella;
    let allPrice = (sum + bed + umbrella).toFixed(2);
    console.log(`${allPrice} lv.`);

}
poolParty(["100", "8", "6", "4"])