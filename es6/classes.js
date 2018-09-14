class Animal {
    constructor(name, colour){
        this.name = name 
        this.colour = colour 
// console.log("Hi I'm " + this.name + " and I'm " + this.colour)

    }
}


class Lion extends Animal {
    constructor(name, colour, role, home){
        super(name,colour)
        this.role = role 
        this.home = home 
    }
    roar(){
        console.log( `Hi I'm ${this.name} and I'm ${this.colour}, my role is ${this.role}, and I live at ${this.home}`)
    }
}

let lion = new Lion("Mufasa", "golden", "king","rock" )
lion.roar()