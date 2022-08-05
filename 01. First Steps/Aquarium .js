function aquarium(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumV  = length * width * heigth;
    let liters = aquariumV  * 0.001;
    let percentAll = percent * 0.01;

    let litersAll = liters * (1-percentAll);

    console.log(litersAll);

}

aquarium(['85', '75', '47', '17'])