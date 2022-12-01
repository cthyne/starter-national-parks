//select all descriptions on page
const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
}

//select all rating values
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

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
const main = document.querySelector("main")

//select a single park
const park = main.querySelector(".park-display")

//remove that park
//main.removeChild(park)