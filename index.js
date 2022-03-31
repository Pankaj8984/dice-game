var randomNumber = Math.floor(Math.random()*6)+1;

var randomImages="dice" + randomNumber + ".png";

var randomSrcImages="images/" + randomImages;


document.querySelectorAll("img")[0].setAttribute("src",randomSrcImages);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImages2="dice" + randomNumber2 + ".png";

var randomSrcImages2="images/" + randomImages2;


document.querySelectorAll("img")[1].setAttribute("src",randomSrcImages2);


if(randomNumber > randomNumber2){
    document.querySelector("h2").innerHTML = " PLAYER 1 WON 😎 ";
}
else if(randomNumber < randomNumber2){
    document.querySelector("h2").innerHTML = " PLAYER 2 WON 😎 ";
}
else{
    document.querySelector("h2").innerHTML = " DRAW 🥺 ";
}