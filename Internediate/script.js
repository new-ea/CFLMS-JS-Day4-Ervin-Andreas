var guestNights = prompt("Input number of nights")

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
            //  console.log(OK); 
            document.getElementById("output").innerHTML = '<button>I\'ll reserve</button>'; 
         } else {
             alert(`Sorry, no available nights for ${this.hotelName}`)
         }     
    }
}

var hotel1 = new Hotel("Marriott", "Graz");
var hotel2 = new Hotel("Hilton", "Wien");





