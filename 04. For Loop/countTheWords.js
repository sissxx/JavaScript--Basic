function countTheWords(input) {

    let text = input[0];
    let words = 1;

    for (let i = 0; i <= text.length; i++) {
        if (text[i] === " ") {
            words++

        }

    }
    if (words <= 10) {
        console.log("The message was send successfully!");
    } else {
        console.log(`The message is too long to be send! Has ${words} words.`);
    }

}
countTheWords(["This message has ten words and you can send it!"])