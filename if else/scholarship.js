function scholarship(input) {
    let income = Number(input.shift());
    let grade = Number(input.shift());
    let minSalary = Number(input.shift());
    let socal = 0;
    let perfect = (grade * 25);
   
    if (income < minSalary && grade > 4.5){
        socal = (minSalary * 0.35);   

    }
    if (grade >= 5.50 ){
        perfect = (grade * 25);
        
    }
    if( perfect < socal) {
        console.log(`You get a Social scholarship ${socal.toFixed(0)} BGN`);
        //console.log("You cannot get a scholarship!");
    }else {
        console.log(`You get a scholarship for excellent results ${perfect.toFixed(0)} BGN`)

    }if (grade < 4.50) {
        console.log("You cannot get a scholarship!");
    }
}
scholarship(["300.00", "5.65", "420.00"])