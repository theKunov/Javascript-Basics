function num(input){
    let number = +input.shift();
    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;
    for (i = 0 ; i < number ; i++){
        let secondNumber = +input.shift();
        if(secondNumber > maxNum){
            maxNum = secondNumber;
        }
        if (secondNumber < minNum){
            minNum = secondNumber;
        }

    }
    console.log(`Max number: ${maxNum} \nMin number: ${minNum}`);
}
num([
6,
250,
5,
2,
0,
100,
1000
])