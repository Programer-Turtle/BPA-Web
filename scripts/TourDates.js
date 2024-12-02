let Tours = [
    {
        'Name':"On Strike",
        'Dates':"November 22 - December 17, 2024",
        'Location':"Europe",
        'Cities':[]
    },
    {
        'Name':"All Around",
        'Dates':"March 13-30, 2025",
        'Location':"United States",
        "Cities":[
            'Washigton DC, March 13',
            'Charleston, WV, March 16',
            'Indianapolis, IN, March 19',
            'Chicago, IL, March 22',
            'Houston, TX, March 26',
            'Los Angeles, CA, March 30'
        ]
    },
    {
        'Name':"Out of Pills",
        'Dates':"October 5 - November 2, 2025",
        'Location':"Canada",
        "Cities":[
            "Toronto, Ontario, October 5",
            "Mayo, Yukon, October 13",
            "Zama City, Alberta, October 16",
            "Fort Ware, British Columbia, 23",
            "Labrador City, Quebc, October 27",
            "Thompson, Manitoba, October 30"
        ]
    }
]

let HoldBox = document.getElementById("HoldBox")

for(let TourIndex=0; TourIndex<Tours.length; TourIndex++){
    let TourBox = document.createElement("div")
    let CurrentTourName = Tours[TourIndex]["Name"]
    let CurrentTourDates = Tours[TourIndex]["Dates"]
    let CurrentTourLocation = Tours[TourIndex]["Location"]
    let CurrentTourCities = Tours[TourIndex]["Cities"]
    TourBox.className = "TourBox"
    TourBox.id = "TourBox"
    TourBox.innerHTML = `<div id="TourBox" class="TourBox">
    <h1>${CurrentTourName}</h1>
    <h2 style="margin-top: 30px;" >Dates</h2>
    <h3>${CurrentTourDates}</h3>
    <h2 style="margin-top: 30px;" >Location</h2>
    <h3>${CurrentTourLocation}</h3>
    <h2 style="margin-top: 30px;" >Cities</h2>`

    for(let CitiesIndex=0; CitiesIndex<CurrentTourCities.length; CitiesIndex++){
        TourBox.innerHTML += `<h3>${CurrentTourCities[CitiesIndex]}</h3>`
    }
    TourBox.innerHTML+="</div>"
    HoldBox.appendChild(TourBox)
}

