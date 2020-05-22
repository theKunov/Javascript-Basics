function table() {
    for (row = 1 ; row <=10 ; row++){
        for (coll =1 ; coll <= 10 ; coll++){
            let result = row * coll
            console.log(`${row} * ${coll} = ${result}`)
        }
    }
}
table([])