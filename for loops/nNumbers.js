function num(input){
    let number = +input.shift();
    let all = 0;
    for (i = 0 ; i < number ; i++){
        let secondNumber = +input.shift();
        all += secondNumber;

    }
    console.log(all);
}
num([3, 20 , 10, 3.5])