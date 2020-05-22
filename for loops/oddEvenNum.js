function oddEven (input){
    let num = +input.shift();
    let even = 0;
    let odd = 0;
    for (i = 0 ; i < num ; i++){
        let number = +input.shift();
        if(i % 2 == 0){
            even += number;
        }else {
            odd += number;
        }
    }
    if(odd == even){
        console.log(`Yes \nSum = ${even}`)
    }else {
        console.log("No \nDiff = " + Math.abs(even - odd))
    }
}
oddEven([
    4,
    10,
    50,
    60,
    20
])