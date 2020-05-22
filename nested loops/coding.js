function code(input) {
    let num = input.shift();
    for (let i = num.length -1 ; i >= 0 ; i--){
        let result = Number(num[i])
        if (num[i] == 0) {
            console.log("ZERO");
            continue;
        }
        let end = "";
        for(let n = 1 ; n <= result ; n++){
            end += String.fromCharCode(result + 33);
        }
        console.log(end);
    }
}
code([
    "2049"
])