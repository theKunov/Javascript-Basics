function number(input) {
    let n = +input.shift();
    counter = 0;
    num = 0 
    let max = Number.MAX_SAFE_INTEGER;
    while (counter < n) {
        let num = +input.shift();
        counter++;
        if (num < max) {
            max = num;
        }
    }
    console.log(max);
}
number(["2", "100", "99"])