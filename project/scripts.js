"use strict"



let open = document.querySelector('#addTeamB')
let dialog = document.querySelector('#addTeamD')
let teamname = document.querySelector('#teamName')
let table = document.querySelector('.table')

//get last scores
let localLength = localStorage.length
for(let i = 0;i<localLength;i++){
    let teamDet = Object.entries(localStorage)[i]
    let teamName = teamDet[0]
    let pp = JSON.parse(teamDet[1]).pp
    let kp = JSON.parse(teamDet[1]).kp
    // console.log(teamName,pp,kp)
    addTeam(teamName,pp,kp)
}

//adding and subtracting scores

function add(p) {
    p.parentNode.children[1].innerText = parseInt(p.parentNode.children[1].innerText) + 1
    let team = p.parentNode.parentNode.children[0].children[1].innerText
    let pp = p.parentNode.parentNode.children[1].children[1].innerText
    let kp = p.parentNode.parentNode.children[2].children[1].innerText
    let scores = {
        pp:pp,
        kp:kp
    }

    localStorage.setItem(team,JSON.stringify(scores))

    // console.log(team)
}
function subtract(p) {
    p.parentNode.children[1].innerText = parseInt(p.parentNode.children[1].innerText) - 1
    let team = p.parentNode.parentNode.children[0].children[1].innerText
    let pp = p.parentNode.parentNode.children[1].children[1].innerText
    let kp = p.parentNode.parentNode.children[2].children[1].innerText
    let scores = {
        pp:pp,
        kp:kp
    }

    localStorage.setItem(team,JSON.stringify(scores))
}

//adding new team to the table

open.addEventListener('click',()=>{
    dialog.style.display = 'block';
})

function addTeam(teamName,pp = 0,kp = 0) {
    let newhtml = `
            <div>
                <button onclick="delTeam(this)">Del</button>
                <p>${teamName}</p>
            </div>
            <div>
                <button onclick="subtract(this)">-</button>
                <p>${pp}</p>
                <button onclick="add(this)">+</button>
            </div>
            <div>
                <button onclick="subtract(this)">-</button>
                <p>${kp}</p>
                <button onclick="add(this)">+</button>
            </div>
    `

    let div = document.createElement('div')
    div.classList.add('tbody')
    div.innerHTML = newhtml
    table.appendChild(div)
    
}

function newTeam(InputElement) {
    // console.log(InputElement.value)
    let check = Object.keys(localStorage).some(item => item.toLowerCase() == InputElement.value.toLowerCase())
    console.log(InputElement.value.toLowerCase())
    if(check){
        alert("Team already exists!")
    } else {
        addTeam(InputElement.value)
        localStorage.setItem(InputElement.value,JSON.stringify({pp:0,kp:0}))
    }
    dialog.style.display = 'none';
}

//Deleting team
function delTeam(delB){
    let div = delB.parentNode.parentNode
    let team = delB.nextElementSibling.innerText
    console.log(team)
    localStorage.removeItem(team)
    div.remove()
}

function clearStorage() {
    localStorage.clear()
    location.reload()
}