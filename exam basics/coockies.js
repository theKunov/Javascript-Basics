function coockie(input) {
    let priceBaklava = +input.shift();
    let priceMuffin = +input.shift();
    let shtolen = +input.shift();
    let candy = +input.shift();
    let biscuit = +input.shift();
    let shtolenPrice = ((priceBaklava * 0.60) + priceBaklava) * shtolen;
    let candyPrice = ((priceMuffin * 0.80) + priceMuffin) * candy;
    let biscuitPrice = biscuit * 7.50;
    let priceForAll = shtolenPrice + candyPrice + biscuitPrice;
    console.log(priceForAll.toFixed(2));
}
coockie([
"6.90",
"4.20",
"1.5",
"2.5",
"1"
])