function movie(input) {
    let budget = Number(input.shift());
    let statist = Number(input.shift());
    let clothesPrize = Number(input.shift());
    let decor = budget * 0.10; // декора = 10% от бюджета на филма
    
    if (statist > 150) {
        clothesPrize = clothesPrize * 0.90;
    }
    let allExp = clothesPrize * statist + decor ;
    if (allExp > budget) {
        let moneyNeed = allExp - budget
        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`)
    }else {
        let moneyLeft = budget - allExp;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}
movie(["20000", "120", "55.5"])