"use strict"

//Employee tracking app
class Employee {
    constructor(firstName,lastName,numYears){
        this.firstName = firstName
        this.lastName = lastName
        this.numYears = numYears
    }
}

let person1 = new Employee('thato', 'matlho',3)
let person2 = new Employee('rameez', 'mohan',5)

let array = [person1,person2]

Employee.prototype.intro = function() {
    console.log(this.firstName +' '+ this.lastName +' ' + 'employee for '+this.numYears+" years.")
}
for(let person of array){
    person.intro()
}

//Menu items price calculator
class Prices {
    #applesPrice = 4;
    #orangesPrice = 6;
    constructor(numApples = 0, numOranges = 0) {
        this.numApples = numApples
        this.numOranges = numOranges
    }

    get total(){
        return this.#applesPrice*this.numApples + this.#orangesPrice*this.numOranges
    }
}

let cart1 = new Prices(3,4)
let cart2 = new Prices(5,2)
console.log(cart1.total, cart2.total)