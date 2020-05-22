function christmas(input) {
    let budget = +input.shift();
    let PriceOfAll = 0;
    let counter = 0;
    let productPrice = 0;
    let product = "";
    let secondCounter = 0;
    while (budget > 0) {
        product = input.shift();
        if (product == "Finish") {
            console.log(`Congratulations! You bought everything!\n${counter} items -> ${PriceOfAll.toFixed(2)}lv spent.`)
            break;
        }
        counter++;
        secondCounter++
        switch (product) {
            case "Star":
                productPrice = 5.69;
                
                break;
            case "Angel":
                productPrice = 8.49;
                
                break;
            case "Lights":
                productPrice = 11.20;
                
                break;
            case "Wreath":
                productPrice = 15.50;
                
                break;
            case "Candle":
                productPrice = 3.59;
                ;
                break;
        }
        
        if (secondCounter == 3) {
            productPrice = productPrice * 0.70
            secondCounter = 0;
        }
        budget -= productPrice;
        PriceOfAll += productPrice;
        if (budget <= 0) {
            console.log(`Not enough money! You need ${(productPrice - (budget + productPrice)).toFixed(2)}lv more.\n${counter-1} items -> ${(PriceOfAll - productPrice).toFixed(2)}lv spent.`)
            break;
        }
        
    }
    
}
christmas([
    '40',
    'Candle',
    'Star',
    'Wreath',
    'Lights',
    'Finish'
    
])