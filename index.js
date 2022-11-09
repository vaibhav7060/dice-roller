var firstNumber = 1+Math.floor(6*Math.random());
var secondNumber = 1+Math.floor(6*Math.random());
var firstImage = "images/dice"+firstNumber+".png";
var secondImage = "images/dice"+secondNumber+".png";
document.querySelector(".img1").setAttribute("src",firstImage);
document.querySelector(".img2").setAttribute("src",secondImage);
if (firstNumber>secondNumber) {
    document.querySelector("h1").innerHTML = "player 1 wins 🚩🚩";

}
else if (secondNumber>firstNumber) {
    document.querySelector("h1").innerHTML = "player 2 wins 🚩🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw !! refresh again ..";
}
