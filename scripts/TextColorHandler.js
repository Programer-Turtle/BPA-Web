function ChangeTextColor(){
    let textObject = document.getElementById("Color")
    let colors = ["rgb(243, 242, 198)", "rgb(202, 45, 119)", "rgb(96, 99, 99)"]
    let TextinnerHtml = textObject.innerHTML
    let FinalHTML = ""
    console.log("test")
    let counter = 0
    for(let char = 0; char<TextinnerHtml.length; char++){
        let currentCharacter = TextinnerHtml[char]
        console.log(currentCharacter)
        if(!currentCharacter == ""){
            FinalHTML += `<span style="color:${colors[counter]};">${currentCharacter}</span>`
            counter++
        }
        if(counter>2){
            counter = 0
        }
    }
    //Sets HTML to new code
    console.log(FinalHTML)
    textObject.innerHTML = FinalHTML
}