function oddEven(input) {
    let a = +input.shift();
    
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    for(i = 1 ; i <= a ; i++){
        let number = +input.shift();
        if (i % 2 ==0) {
            evenSum += number;
            if (number > evenMax) {
                evenMax = number.toFixed(2);
            }
            if (number < evenMin) {
                evenMin = number.toFixed(2);
            }
        }
        if (i % 2 != 0) {
            oddSum += number;
            if (number > oddMax) {
                oddMax = number.toFixed(2);
            }
            if (number < oddMin) {
                oddMin = number.toFixed(2);
            }
        }
    }
    if (oddMin == Number.MAX_SAFE_INTEGER) {
        oddMin = "No"
    }
    if (oddMax == Number.MIN_SAFE_INTEGER) {
        oddMax = "No"
    }
    if (evenMin == Number.MAX_SAFE_INTEGER) {
        evenMin = "No"
    }
    if (evenMax == Number.MIN_SAFE_INTEGER) {
        evenMax = "No"
    }
    console.log(`OddSum=${oddSum.toFixed(2)}, \nOddMin=${oddMin}, \nOddMax=${oddMax}, \nEvenSum=${evenSum.toFixed(2)}, \nEvenMin=${evenMin}, \nEvenMax=${evenMax}`) 
}
oddEven([
6,
2,
3,
5,
4,
2,
1
])