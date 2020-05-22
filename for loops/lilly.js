function bithday(input) {
    let age = +input.shift();
    let washer = +input.shift();
    let toyPrice = +input.shift();
    let money = 0;
    let moneyCount = 0;
    let toysCount = 0;

    for (i = 1 ; i <= age ; i++){
        if (i % 2 == 0) {
            moneyCount++
            money += 10.00 * moneyCount;
            
        }else {
            toysCount++
        }
    }
    let allMoney = money + (toysCount * toyPrice) - moneyCount;
    if (allMoney >= washer) {
        console.log("Yes! " + (allMoney - washer).toFixed(2));
    }else {
        console.log("No! " + (washer - allMoney).toFixed(2))
    }

}
bithday([
10,
170.00,
6
])