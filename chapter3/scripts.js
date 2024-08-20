"use strict"


const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");

console.log(theList)

//Company product catalog
let inventory = [];
let item1 = {name: "samsung", model: "tablet", cost: "R2000", quantity: 4}
let item2 = {name: "BMW", model: "4 series", cost: "R300000", quantity: 5}
let item3 = {name: "colgate", model: "toothbrush", cost: "R20", quantity: 6}

inventory.push(item1,item2,item3)

console.log(inventory)
console.log(inventory[2].quantity)