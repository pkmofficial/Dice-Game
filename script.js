function shuffle() {

    var a = Math.floor(Math.random()*6)+1 ;
    var b = Math.floor(Math.random()*6)+1 ;

    if(a>b) {
        document.querySelector(".container h1").textContent="🚩First Player Won" ;
    }
    else if(a<b) {
        document.querySelector(".container h1").textContent="Second Player Won🚩" ;
    }
    else {
        document.querySelector(".container h1").textContent="🏳️Draw🏳️" ;
    }

    if(a==6) document.querySelector(".img1").setAttribute("src","images/dice6.png") ;
    else if(a==5) document.querySelector(".img1").setAttribute("src","images/dice5.png") ;
    else if(a==4) document.querySelector(".img1").setAttribute("src","images/dice4.png") ;
    else if(a==3) document.querySelector(".img1").setAttribute("src","images/dice3.png") ;
    else if(a==2) document.querySelector(".img1").setAttribute("src","images/dice2.png") ;
    else if(a==1) document.querySelector(".img1").setAttribute("src","images/dice1.png") ;
    
    if(b==6) document.querySelector(".img2").setAttribute("src","images/dice6.png") ;
    else if(b==5) document.querySelector(".img2").setAttribute("src","images/dice5.png") ;
    else if(b==4) document.querySelector(".img2").setAttribute("src","images/dice4.png") ;
    else if(b==3) document.querySelector(".img2").setAttribute("src","images/dice3.png") ;
    else if(b==2) document.querySelector(".img2").setAttribute("src","images/dice2.png") ;
    else if(b==1) document.querySelector(".img2").setAttribute("src","images/dice1.png") ;
    
}

// ALTER
/*

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

*/