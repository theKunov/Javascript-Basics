function party(input) {
    let moneyForBand = +input.shift();
    let numOfPeople = input.shift();
    let allGuest = 0;
    let moneyFromGuest = 0;
    while (numOfPeople != "The restaurant is full" ) {
        allGuest += Number(numOfPeople);
        if (numOfPeople < 5 ) {
            moneyFromGuest += numOfPeople * 100
        }else {
            moneyFromGuest += numOfPeople * 70
        }
        numOfPeople = input.shift();
    }
    if (moneyForBand <= moneyFromGuest) {
        console.log(`You have ${allGuest} guests and ${moneyFromGuest - moneyForBand} leva left.`)
    }else{
        console.log(`You have ${allGuest} guests and ${moneyFromGuest} leva income, but no singer.`)
    }
}
party([
"2800",
"5",
"5",
"4",
"6",
"6",
"12",
"12",
"The restaurant is full"
])