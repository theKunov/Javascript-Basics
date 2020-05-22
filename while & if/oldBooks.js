function books(input) {
    let nameBook = input.shift();
    let liblary = +input.shift();
    let count = 0;
    let currentBook = 0;
    
    while (count < liblary) {
        currentBook = input.shift();
        
        if (currentBook == nameBook) {
            console.log(`You checked ${count} books and found it.`);
            break;
        }
        count++;
       
    }
    if (currentBook != nameBook) {
        console.log(`The book you search is not here! \nYou checked ${count} books.`)
    
    }
    
}
books([
    'Troy',
    '8',
    'Stronger',
    'Life Style',
    'Troy'
])