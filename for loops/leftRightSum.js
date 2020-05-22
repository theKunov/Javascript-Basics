function sum (input){
    let num = +input.shift();
    let leftSum = 0;
    let rightSum = 0;
    for(i=0 ; i< num ; i++){
        leftSum += +input.shift();
    }
    for(n=0 ; n< num ; n++){
        rightSum += +input.shift();
    }
    if(leftSum == rightSum){
        console.log(`Yes, sum = ${leftSum}`)
    }else{
        console.log("No, diff = " + Math.abs(leftSum - rightSum))
    }
}
sum([
2,
10,
90,
60,
40
])