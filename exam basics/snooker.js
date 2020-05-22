function snooker(input) {
    let stage = input.shift();
    let typeTicket = input.shift();
    let ticketQuan = +input.shift();
    let pictureOption = input.shift();
    let PriceOFAllTickets = 0;
    switch (stage) {
        case "Quarter final":
            switch (typeTicket) {
                case "Standard":
                    PriceOFAllTickets = ticketQuan * 55.50;
                    break;
                case "Premium":
                    PriceOFAllTickets = ticketQuan * 105.20;
                    break;
                case "VIP":
                    PriceOFAllTickets = ticketQuan * 118.90;
                    break;
            }
            break;
        case "Semi final":
            switch (typeTicket) {
                case "Standard":
                    PriceOFAllTickets = ticketQuan * 75.88;
                    break;
                case "Premium":
                    PriceOFAllTickets = ticketQuan * 125.22;
                    break;
                case "VIP":
                    PriceOFAllTickets = ticketQuan * 300.40;
                    break;
            }
            break;
        case "Final":
            switch (typeTicket) {
                case "Standard":
                    PriceOFAllTickets = ticketQuan * 110.10;
                    break;
                case "Premium":
                    PriceOFAllTickets = ticketQuan * 160.66;
                    break;
                case "VIP":
                    PriceOFAllTickets = ticketQuan * 400;
                    break;
            }
            break;


    }
    
    if (PriceOFAllTickets > 4000) {
        PriceOFAllTickets -= PriceOFAllTickets * 0.25;
        pictureOption = "N" 
            
    }else if(PriceOFAllTickets > 2500){
        PriceOFAllTickets -= PriceOFAllTickets * 0.10;
    }
    if (pictureOption == "Y") {
        PriceOFAllTickets += ticketQuan * 40;
    }
    console.log(PriceOFAllTickets.toFixed(2))
}
snooker([
    "Semi final",
    "VIP",
    "9",
    "Y"
])