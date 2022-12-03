//select all parks
const parks = document.querySelectorAll(".park-display")
const numParks = parks.length;

//create a new element
const newElement = document.createElement("div");

//add text
newElement.innerText = `${numParks} exciting parks to visit!`;

//add class
newElement.classList.add("header-statement")

//insert new element
const header = document.querySelector("header")
header.appendChild(newElement)

//get parent element of all parks
const mainElement = document.querySelector("main")

//select a single park
const park = mainElement.querySelector(".park-display")

//remove that park
//main.removeChild(park)


//Select all buttons for all parks
const faveBtns = document.querySelectorAll(".rate-button")

faveBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    })
})

//Sort by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
        return -1;
    } else if (parkAName > parkBName) {
        return 1;
    } else {
        return 0;
    }
};

//Sort by rating
const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(
        parkA.querySelector(".rating-display > .value").innerText
      );
    const parkBRating = parseFloat(
        parkB.querySelector(".rating-display > .value").innerText
      );
    return parkBRating - parkARating
}

//Function for handling the 'nameSorter' click 
const nameSorterClickHandler = (event) => {
    event.preventDefault();
    console.log("You clicked the name sorter");

    //Get <main> element that contains all parks
    const mainElement = document.querySelector("main")

    //Get NodeList of all parks
    const allParks = mainElement.querySelectorAll(".park-display")
    // console.log(allParks)

    //Empty <main> element 
    mainElement.innerHTML = "";

    //Convert NodeList to an array for sorrting
    const parksArray = Array.from(allParks);

    //Sort the array 
    parksArray.sort(sortByName);

    //Insert each park into the DOM
    parksArray.forEach((park) => {
        mainElement.appendChild(park);
    });
};


//Add click event for sort parks by rating
const ratingSorterClickHandler = (event) => {
    event.preventDefault()
    console.log("you clicked rating sorter")

    //Get 'main'element
    const getMain = document.querySelector("main")

    //Select parks for rating
    const parksForRating = getMain.querySelectorAll(".park-display")

    //Clear main element
    getMain.innerHTML = ""

    //Transform NodeList to array
    const parksArr = Array.from(parksForRating);

    //Sort parks by rating 
    parksArr.sort(sortByRating)

    parksArr.forEach((park) => {
        getMain.appendChild(park);
    });
};

 const main = () => {
    //Select the `nameSorter` link
    const nameSorter = document.querySelector("#name-sorter");

    //Add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);

    //Select `ratingSorter` link
    const ratingSorter = document.querySelector("#rating-sorter");

    //Add an event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
 }

 //Add event listener for `DOMContentLoaded`
 window.addEventListener("DOMContentLoaded", main);
