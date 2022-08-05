function petshop(input){

    let dogs = Number(input[0]);
    let otherPets  = Number(input[1]);

    let sum = dogs*2.5 + otherPets*4;

    console.log(`${sum} lv.`);
}
petshop(["5", "4"])