// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const list = [{
        date: "SMARCH 28, 2019",
        h1: "Lambda Times",
        temp: 98
    } 
]

const headerContainer = document.querySelector(".header-container")

list.forEach(element => {
    console.log(element)
    headerContainer.appendChild(Header(element.date, element.h1, element.temp))
});

function Header(date, h1, temp) {
    const header = document.createElement("div");
    const dates = document.createElement("span");
    const title = document.createElement("h1");
    const tempp = document.createElement("span");

    header.appendChild(dates);
    header.appendChild(title);
    header.appendChild(tempp);
    
    header.classList.add("header");
    dates.classList.add("date");
    tempp.classList.add("temp");

    dates.textContent = date;
    title.textContent = h1;
    temp.textContent = temp;

    return header
    
}
