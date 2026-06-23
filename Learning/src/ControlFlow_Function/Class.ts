class car{
    public brand:String
    private speed:number
    private fuel:String

    constructor(brand:String, speed:number, fuel:String){
        this.brand = brand
        this.speed = speed
        this.fuel  = fuel
    }

    public accelerate(){
        this.speed += 10
        console.log(this.speed)
    }

    private reFuel(){
        console.log(this.fuel)
    }

    protected honk(){
        console.log("Honk,Honk!")
    }

    public display(){
        console.log(`Brand: ${this.brand}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Fuel ${this.fuel}`)
        this.reFuel()
        this.honk()
    }

}

let myCar = new car("Toyota",60,"Gosolin")
console.log(`Brand: ${myCar.brand}`)
myCar.accelerate()
//myCar.reFuel()
//myCar.honk()
myCar.display()