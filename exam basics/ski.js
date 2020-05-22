function ski(input) {
   let budget = +input.shift();
   let skiPrice = +input.shift();
   let skiPole = +input.shift();

   let boots = skiPrice * 0.40 
   let clothes = skiPrice * 0.40 + skiPrice;
   let all = skiPrice + boots + clothes
   if(all > 800){
    skiPole = 0;
   }
   let finishPrice = all + skiPole
   if(finishPrice <= budget){
    console.log(`Angel's sum is ${finishPrice.toFixed(2)} lv. He has ${(budget - finishPrice).toFixed(2)} lv. left.`)
   }else{
       console.log(`Not enough money! You need ${(finishPrice - budget).toFixed(2)} leva more!`)
   }

}
ski([
"450",
"200",
"20"
])