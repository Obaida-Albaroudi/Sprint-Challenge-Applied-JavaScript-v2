// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topic = axios.get(`https://lambda-times-backend.herokuapp.com/topics`);

const parentDiv = document.querySelector(".topics");

topic
    .then (data =>{
        const element = data.data.topics;
        element.forEach(topic => {
            parentDiv.appendChild(tab(topic))
        });
    })
    .catch(error => {
        return ("this was an", error)
    })



function tab(tabName){
    const tab = document.createElement("div");

    tab.classList.add("tab");

    tab.textContent = tabName;

    tab.addEventListener("click", e=>{
        console.log(e.target)
        tab.classList.toggle("active-tab")
    })

    return tab
}

//Stretch
// function selectTab() {
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach((tabElement) => {
//       tabElement.classList.remove("active-tab")
//     });
//     const cards = document.querySelectorAll(".card");
//     cards.forEach((card) => {
//       card.style.display = "none";
//     })
//     tab.classList.add("active-tab");
//     cards.forEach(card => card.selectCard());
//   }

//   tab.addEventListener("click", () => selectTab());