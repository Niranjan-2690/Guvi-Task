class Uber {
    constructor(kilometer, pricerPerKilometer = 15){
        this.kilometer = kilometer,
        this.pricerPerKilometer = pricerPerKilometer
    }

   getPrice(){
    const totalFare = this.kilometer * this.pricerPerKilometer
    return totalFare;
   }
}

const uberPrice = new Uber(22)
console.log(uberPrice.getPrice())