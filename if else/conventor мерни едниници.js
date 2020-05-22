function convert(input) {
    let a = Number(input.shift());
    let b = input.shift();
    let c = input.shift();
    let metric = 0
    if (b == "mm" && c == "cm") {
        metric = a / 10;
    }else if (b == "mm" && c == "m"){
        metric = a / 1000;
    }else if (b == "cm" && c == "mm" ) {
        metric = a * 10 ;
    }else if (b == "cm" && c == "m" ) {
        metric = a / 100 ;
    }else if (b == "m" && c == "cm"){
        metric = a * 100;
    }else if (b == "m" && c == "mm"){
        metric = a * 1000;
    }else console.log();
    
    console.log(metric.toFixed(3));
    
}
convert(["12", "mm", "m"])