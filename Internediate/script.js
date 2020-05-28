var guestHotel= prompt("Choose your Hotel");

class Hotel {
    hotelName = "";
    numberOfNights = Math.floor(Math.random() * (10 - 1) ) + 1;
    address = "";

    constructor(hotelName, address) {
        this.hotelName = hotelName;
        this.address = address;
    }

    showAvailability(){
         if (this.numberOfNights > guestNights) {
            document.getElementById("output").innerHTML = '<button>I\'ll reserve</button>'; 
         } else {
             alert(`Sorry, no available nights for ${this.hotelName}`)
         }     
    }
}


var hotel1 = new Hotel("Marriott");
var hotel2 = new Hotel("Hilton");

if (hotel1.hotelName === guestHotel) {
    guestNights = prompt("Input number of nights");
    hotel1.showAvailability();
}

if (hotel2.hotelName === guestHotel) {
    hotel2.showAvailability();
}



