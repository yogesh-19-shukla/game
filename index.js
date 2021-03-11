var randomNumber1 = Math.floor(Math.random() * 6)+1;              // numbr bw 1-6

var randomImage1 = "dice" + randomNumber1 + ".png";        // dice1-dice6.png

var randomImageSource1 = "images/" + randomImage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);  //random images will show


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//win situation declared

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML= "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML= "Draw!";
}
