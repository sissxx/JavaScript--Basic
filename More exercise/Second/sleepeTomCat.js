function sleepyCat(input) {

    let breakDaysCount = Number(input[0]);
    let year = 365;
    let normalCatHours = 30000;
    let workingDaysForPlay = 63;
    let holidaysForPlay = 127;

    let allDays = year - breakDaysCount;
    let playTime = allDays * workingDaysForPlay + breakDaysCount * holidaysForPlay;

    if (normalCatHours >= playTime) {
        console.log("Tom sleeps well");
        console.log(`${Math.floor((normalCatHours- playTime)/ 60)} hours and ${(normalCatHours - playTime)% 60} minutes less for play`);
    } else {
        console.log("Tom will run away");
        console.log(`${Math.floor((playTime - normalCatHours)/ 60)} hours and ${(
          playTime - normalCatHours)% 60} minutes more for play`);
    }


}
sleepyCat(["113"])