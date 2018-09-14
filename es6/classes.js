class Animal {
    constructor(name, colour){
        this.name = name 
        this.colour = colour 
// console.log("Hi I'm " + this.name + " and I'm " + this.colour)
console.log( `Hi I'm ${this.name} and I'm ${this.colour}`)
    }
}

let lion = new Animal("Mufasa", "golden")
console.log(lion)

