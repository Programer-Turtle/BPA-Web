let htmlDocument = document.getElementsByTagName("html")[0]
//Creates Navbar
async function LoadNavBar(){
    let NavBarCode = `<a class="DontBig" style="padding: 0; margin: 0; margin-top: 5px; margin-left: 10px; margin-right: 40px;"href="index.html"><img style="padding: 0; margin: 0;" width="80px" src="Photos/Logo.png" alt="Logo"></a><a style="font-size: 60px;" href="aboutus.html"><span class="Color">About Us</span></a><a style="font-size: 60px;" href="swag.html"><span class="Color">Swag</span></a><a style="font-size: 60px;" href="dates.html"><span class="Color">Tour Dates</span></a><a style="font-size: 60px;" href="contact.html"><span class="Color">Contact Us</span></a>`
    try{
        document.getElementById("NavBar").innerHTML = NavBarCode
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

//Loads all UI
async function LoadUI() {
    StatusCheck = []
    StatusCheck.push(await LoadNavBar())
    if(!StatusCheck.includes(false)){
        console.log("No errors occured when loading UI.")
    }
    else{
        console.log("Errors occured when loading UI.")
    }
}

//Adjust background
function SetBackgroundSize(){
    console.log(htmlDocument.scrollHeight)
    document.body.style.backgroundSize = `100vw ${htmlDocument.scrollHeight}px`
}

window.addEventListener("resize", SetBackgroundSize)

LoadUI()
setTimeout(SetBackgroundSize, 50)