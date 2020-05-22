function sum(input) {
    let num1 = +input.shift();
    let num2 = +input.shift();
    let magicNum = +input.shift();
    let counter= 0;
    let result = 0;
    for (i = num1; i<= num2 ; i ++ ){
        for (n = num1; n<= num2 ; n ++ ){
            result = i + n;
            counter++
            if(result == magicNum){
                console.log(`Combination N:${counter} (${i} + ${n} = ${magicNum})`)
                return;
            }
            
        }
    }
    if(result != magicNum){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sum([23,
    24,
    20])