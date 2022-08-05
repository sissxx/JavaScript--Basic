function graduationPtTwo(input) {
    let index = 0;
    let name = input[index];
    index++;
    let sum = 0;
    let poorGrade = 0;
 
    while (index <= 12) {
        if (poorGrade === 2) {
            break;
        }
        let tempGrade = Number(input[index]);
        index++
        if (tempGrade >= 4) {
            sum += tempGrade;
        } else {
            poorGrade++
        }
 
    }
 
    if (poorGrade < 2) {
        console.log(`${name} graduated. Average grade: ${(sum/(index-1)).toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${(index-poorGrade)} grade`);
    }
 
}
graduationPtTwo(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
