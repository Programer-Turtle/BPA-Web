let BobbleText = document.getElementById("BobbleText")
let CurrentX = 0

function GetCosValue(x){
    return Math.cos(x)*30
}

function MoveLetter(){
    BobbleText.style.transform = `translateY(${GetCosValue(CurrentX)}px)`
    CurrentX+=.03
}

var i = setInterval(function(){
    MoveLetter()
}, 10);