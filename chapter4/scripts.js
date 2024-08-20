"use strict"

let array1 = ["Rock", "Paper", "Scissors"];

let player = Math.floor(Math.random() * 3)
let comp = Math.floor(Math.random() * 3)

let playerRes = array1[player]
let compRes = array1[comp]
console.log("Player: " + playerRes)
console.log("Comp: " + compRes)

if (playerRes == compRes) {
    console.log("It's a tie")
} else if( playerRes == "Rock" && compRes == "Paper") {
    console.log("Computer Wins")
} else if( playerRes == "Rock" && compRes == "SCissors") {
    console.log("Player Wins")
} else if( playerRes == "Paper" && compRes == "Rock") {
    console.log("player Wins")
} else if( playerRes == "Paper" && compRes == "Scissors") {
    console.log("Computer Wins")
} else if( playerRes == "Scissors" && compRes == "Paper") {
    console.log("player Wins")
} else if( playerRes == "Scissors" && compRes == "Rock") {
    console.log("Computer Wins")
}