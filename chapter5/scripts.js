"use strict"

let mult = []
let num = 10
let main = 3

for(let i = 0;i< num;i++){
    let tempArray = []
    for (let j = 1;j <= num;j++){
        tempArray.push(main)
        main += 3
    }
    mult.push(tempArray)
}

console.log(mult)