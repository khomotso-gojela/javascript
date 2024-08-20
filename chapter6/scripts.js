"use strict"

//Recursive function
function count(n){
    console.log(n)
    if (n < 10){
        count(++n)
    }
}

count(1)

//Set timeout order
let one = () => {
    console.log("one")
}
let two = () => {
    console.log("two")
}
let three = () => {
    console.log("three")
    two()
    one()
}
let four = () => {
    console.log("four")
    setTimeout(one,300)
    three()
}
four()