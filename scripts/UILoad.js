//<a style="padding: 0; margin: 0; margin-top: 5px; margin-left: 10px; margin-right: 40px;"href="index.html"><img style="padding: 0; margin: 0;" width="80px" src="https://programer-turtle.github.io/WeatherSystem/Images/Logo.PNG" alt="Logo"></a><a style="font-size: 60px;" href="Search.html"><span class="Color">Swag</span></a>

async function LoadNavBar(){
    let NavBarCode = `<a style="padding: 0; margin: 0; margin-top: 5px; margin-left: 10px; margin-right: 40px;"href="index.html"><img style="padding: 0; margin: 0;" width="80px" src="https://programer-turtle.github.io/WeatherSystem/Images/Logo.PNG" alt="Logo"></a><a style="font-size: 60px;" href=""><span class="Color">Swag</span></a><a style="font-size: 60px;" href=""><span class="Color">Conact Us</span></a>`
    try{
        document.getElementById("NavBar").innerHTML = NavBarCode
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

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