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
        "Cities":[]
    }
]

let HoldBox = document.getElementById("HoldBox")

for(let TourIndex=0; TourIndex<Tours.length; TourIndex++){
    let TourBox = document.createElement("div")
    let CurrentTourName = Tours[TourIndex]["Name"]
    TourBox.className = "TourBox"
    TourBox.id = "TourBox"
    TourBox.innerHTML = `<div id="TourBox" class="TourBox"><h1>${CurrentTourName}</h1></div>`
    HoldBox.appendChild(TourBox)
}

