class Animal {
    constructor(name, legs) {
        this.name = name
        this.legs = legs
    }
    speech(){
        return `${this.name} makes a noise`
    }
    numberOfLges(){
        return `This animal has ${this.legs} legs`
    }
}

const dog = new Animal("Dog", 4)
console.log(dog.speech())
console.log(dog.numberOfLges())

const cat = new Animal("Cat", 4)
console.log(cat.speech())
console.log(cat.numberOfLges())