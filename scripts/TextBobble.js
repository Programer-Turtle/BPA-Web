let BobbleText = document.getElementById("BobbleText")
let CurrentX = 0

//Uses cos to make an effect of hovering.
function GetCosValue(x){
    return Math.cos(x)*30
}

//Moves text up and down.
function MoveLetter(){
    BobbleText.style.transform = `translateY(${GetCosValue(CurrentX)}px)`
    CurrentX+=.03
}

//Changes location every 10 miliseconds
var i = setInterval(function(){
    MoveLetter()
}, 10);