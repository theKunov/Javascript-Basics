function decoration(input) {
    let budget = +input.shift();
    let item = input.shift();
    let itemPrice = 0;
    while (item != "Stop") {
        for (let i = 0; i < item.length; i++) {
            let itemNum = item.charCodeAt(i);
            itemPrice += itemNum;

        }
        budget -= itemPrice;
        if (budget >= 0) {
            console.log("Item successfully purchased!")
            item = input.shift();
            itemPrice = 0;
        } else {
            console.log("Not enough money!")
            return;
        }
    }
    console.log(`Money left: ${budget}`)
}
decoration([
"5000",
"Christmas lights",
"wreath",
"Stop"
])