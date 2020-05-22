function sum(input) {
    let num1 = +input.shift();
    let num2 = +input.shift();
    let print = "";
    for(let i= num1 ; i <= num2 ; i++){
        let even = 0;
        let odd = 0;
        let num = "" + i;
        for(let n = 0 ; n < num.length ; n++){
            let now = Number(num[n]);
            if(n % 2 == 0){
                even += now;
            }else{
                odd += now;

            }
        }
        if (odd == even) {
            print += i + " ";
        }
    }
    console.log(print);
}
sum(["100000", "100050"])