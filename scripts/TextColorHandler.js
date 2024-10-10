function ChangeTextCode(Text){
    // let colors = ["rgb(243, 242, 198)", "rgb(202, 45, 119)", "rgb(96, 99, 99)"]
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    let FinalHTML = ""
    let counter = 0
    for(let char = 0; char<Text.length; char++){
        let currentCharacter = Text[char]
        if(!(currentCharacter == " ")){
            FinalHTML += `<span class="test" style="color:${colors[counter]};">${currentCharacter}</span>`
            counter++
        }
        else{
            FinalHTML += currentCharacter
        }
        if(counter>colors.length-1){
            counter = 0
        }
    }
    return FinalHTML
}

function ChangeTextColor(){
    let textObjectsList = document.querySelectorAll("[class='Color']")
    for(let objectIndex = 0; objectIndex<textObjectsList.length; objectIndex++){
        let textObject = textObjectsList[objectIndex]
        let TextinnerHtml = textObject.innerText
        //Get Code
        let FinalHTML = ChangeTextCode(TextinnerHtml)

        //Sets HTML to new code
        textObject.innerHTML = FinalHTML
        textObject.style.display = "block"
    }
}
