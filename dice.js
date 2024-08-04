var image1 = document.querySelector(".i1");
var image2 = document.querySelector(".i2");
var win = document.querySelector(".refresh")
// var roll = document.querySelector("button")

var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);

function roll1() {
    if (player1 == 1) {
        image1.setAttribute("src" , "images/dice1.png")
    }
    else if (player1 == 2) {
        image1.setAttribute("src" , "images/dice2.png")
    }
    else if (player1 == 3) {
        image1.setAttribute("src" , "images/dice3.png")
    }
    else if (player1 == 4) {
        image1.setAttribute("src" , "images/dice4.png")
    }
    else if (player1 == 5) {
        image1.setAttribute("src" , "images/dice5.png")
    }
    else {
        image1.setAttribute("src" , "images/dice6.png")
    }

}
 
function roll2() {
    if (player2 == 1) {
        image2.setAttribute("src" , "images/dice1.png")
    }
    else if (player2 == 2) {
        image2.setAttribute("src" , "images/dice2.png")
    }
    else if (player2 == 3) {
        image2.setAttribute("src" , "images/dice3.png")
    }
    else if (player2 == 4) {
        image2.setAttribute("src" , "images/dice4.png")
    }
    else if (player2 == 5) {
        image2.setAttribute("src" , "images/dice5.png")
    }
    else {
        image2.setAttribute("src" , "images/dice6.png")
    }
}

function winner() {
    if (player1 > player2) {
        win.innerText = "Player 1 Wins"
    }
    else if (player1 < player2) {
        win.innerText = "Player 2 Wins"
    }
    else {
        win.innerText = "Thats a draw"
    }
}


// function call(){
//     roll1();
//     roll2();
//     winner();
// }

document.querySelector("button").addEventListener("click" , roll1 )
document.querySelector("button").addEventListener("click" , roll2 )
document.querySelector("button").addEventListener("click" , winner )
