function halfSum(input) {
    let num = +input.shift();
    let maxNum = Number.MIN_SAFE_INTEGER;
    let allNum = 0;
    for (i = 1 ; i <= num ; i++){
        let number = +input.shift();
        if(number > maxNum){
            maxNum = number;
        }
        allNum += number;
    }
    let finalNum = allNum - maxNum;
    if (maxNum == finalNum) {
        console.log(`Yes \nSum = ${finalNum}`)
    }else{
        console.log(`No \nDiff = ${Math.abs(maxNum - finalNum)}`)
    }
}
halfSum([
"7",
"3",
"4",
"1",
"1",
"2",
"12",
"1"
])