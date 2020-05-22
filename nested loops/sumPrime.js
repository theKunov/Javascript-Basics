function prime(input) {
    let num = input.shift();
    let prime = 0;
    let nonPrime = 0;
    while (num != "stop") {
        if (num < 0) {
            console.log("Number is negative.")
        }
        let isPrime = true;
        if (num == 1) {
            isPrime = false;
        } else {
            for (let i = 0; i <= num; i++) {
                if (num % i == 0 && i != num) {
                    isPrime = false;
                    break;
                }
                if (isPrime) {
                    prime += num;
                    break;
                }else{
                    nonPrime += num;
                    break;
                }
            }

        }
        
        
        num = +input.shift();
    }
    console.log(prime)
}
prime([
    "3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
])