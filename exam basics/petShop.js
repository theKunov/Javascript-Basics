function pet(input) {
    let days = +input.shift();
    let allFood = +input.shift();
    let allDogFood = 0;
    let allCatFood = 0;
    let biscuits = 0;
    let counter = 0;
    for(i=1 ; i <= days ; i++){
        let dogFood = +input.shift();
        let catFood = +input.shift();
        allDogFood += dogFood;
        allCatFood += catFood;
        let foodForDay = dogFood + catFood;
        counter++;
        if(counter == 3){
            biscuits += foodForDay * 0.10;
            counter = 0;
        }
    }
    let allFoodEaten = allDogFood + allCatFood;
    console.log(`Total eaten biscuits: ${biscuits.toFixed(0)}gr.`)
    console.log(`${(allFoodEaten / allFood * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${(allDogFood / allFoodEaten * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${(allCatFood / allFoodEaten * 100).toFixed(2)}% eaten from the cat.`)
}
pet([
"3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"
])