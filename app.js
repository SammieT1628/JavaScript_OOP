console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name
        this.pets = pets
        this.residence = residence
        this.hobbies = hobbies
    }

    info() {}
    soundOff() {}
    addHobby(hobby) {
        this.hobbies.push(hobby)
    }
    removeHobby(hobby){
        let removedHobby = this.hobbies.filter(e => e != hobby)
        return this.hobbies = removedHobby
    }
    greeting(){
        console.log("Hello fellow person!")
    }
}

class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies)
        this.occupation = "Full Stack Web Developer"
    }
    greeting() {
        console.log("Hello I am a coder")
    }
}

let p1 = new Person("Sam", 2, "Thompson", ["Read"])
let p2 = new Coder("Joe", 4, "Boop", ["Ski"])
console.log(p1)
p1.greeting()
p1.addHobby("Biking")
p1.removeHobby("Read")
console.log(p1)

console.log(p2)
p2.greeting()
p2.addHobby("Walking")
console.log(p2)

class Calculator {
    constructor(){
        this.result = 0
    }

    add(a, b) {
        if(b) this.result = a + b
        else this.result = this.result + a
    }
    subtract(a, b) {
        if(b) this.result = a - b
        else this.result = this.result - a
    }
    multiply(a, b) {
        if(b) this.result = a * b
        else this.result = this.result * a
    }
    divide(a, b) {
        if(b) this.result = a/b
        else this.result = this.result/5
    }

    displayResult(){
        console.log(this.result)
    }
}

let obj1 = new Calculator()
obj1.add(10,5)
obj1.displayResult()
obj1.subtract(5)
obj1.displayResult()
obj1.multiply(5, 10)
obj1.displayResult()
obj1.divide(5)
obj1.displayResult()
