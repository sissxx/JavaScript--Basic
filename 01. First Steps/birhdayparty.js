function birhdayParty(input) {

    let rent = Number(input[0]);

    let cake = rent * 0.2;
    let drinks = cake - (cake * 0.45);
    let clown = rent / 3;

    let sum = rent + cake + drinks + clown;
    
    console.log(sum);

}
birhdayParty(['2250'])