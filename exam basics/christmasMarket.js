function market(input) {
    let moneyNeed = +input.shift();
    let fantasyBooks = +input.shift() * 14.90;
    let horrorBooks = +input.shift() * 9.80;
    let romanticBooks = +input.shift() * 4.30;
    let finalPrice = (fantasyBooks + horrorBooks + romanticBooks) * 0.80;
    if (finalPrice > moneyNeed) {
        let moneyLeft = finalPrice - moneyNeed;
        finalPrice -= moneyLeft;
        let bonus = Math.floor(moneyLeft * 0.10).toFixed(0); 
        finalPrice += moneyLeft - bonus; 
        console.log(`${(finalPrice).toFixed(2)} leva donated.\nSellers will receive ${bonus} leva.`)
        
    }else if(finalPrice == moneyNeed){
        console.log(`${(finalPrice).toFixed(2)} leva donated.\nSellers will receive 0 leva.`);
        
    }else {
        console.log(`${(moneyNeed - finalPrice).toFixed(2)} money needed.`)
    }
    
    

}
market([
"200",
"15",
"10",
"5"
])