function cinema(input) {
    let movie = input.shift();
    let standards = 0;
    let student = 0;
    let kids = 0;
    
    let totalTickets = 0;
    while (movie != "Finish") {
        let freeSeats = +input.shift();
        let allSeatsTaken = 0;
        ticketType = " ";
        
        for (let ticket = 0 ; ticket < freeSeats ; ticket++) {
            ticketType = input.shift();
            if (ticketType == "End") {
                break;
            }
            if (ticketType == "Finish") {
                break;
            }
            
            switch (ticketType) {
                case "student":
                    student++;
                    totalTickets++;
                    allSeatsTaken++;
                    break;
                case "standard":
                    standards++;
                    totalTickets++;
                    allSeatsTaken++;
                    break;
                case "kid":
                    kids++;
                    totalTickets++;
                    allSeatsTaken++;
                    break;
            }
        }
        console.log(`${movie} - ${(allSeatsTaken / freeSeats * 100).toFixed(2)}% full.`);
        movie = input.shift();
        
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standards/ totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kids / totalTickets * 100).toFixed(2)}% kids tickets.`);
    
}
cinema([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])