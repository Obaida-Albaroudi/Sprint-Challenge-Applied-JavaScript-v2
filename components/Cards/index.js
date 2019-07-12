// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const apiData = axios.get(`https://lambda-times-backend.herokuapp.com/articles`);
console.log(apiData)


const cardsContainer = document.querySelector(".cards-container");

const array = []

// apiData
//     .then(data =>{
//         console.log(data)
//         const bootstra = data.data;
//     })
//     .catch(error =>{
//         return "Error not workingggggg!"
//       });


apiData
    .then(data =>{
        const bootstrap1 =data.data.articles.bootstrap;
        const javascript1 =data.data.articles.javascript;
        const jquery1 =data.data.articles.jquery;
        const node1=data.data.articles.node;
        const technology1=data.data.articles.technology;
        bootstrap1.forEach(data =>{
            cardsContainer.appendChild(cardInfo(data))
        })
        javascript1.forEach(data =>{
            cardsContainer.appendChild(cardInfo(data))
        })
        jquery1.forEach(data =>{
            cardsContainer.appendChild(cardInfo(data))
        })
        node1.forEach(data =>{
            cardsContainer.appendChild(cardInfo(data))
        })
        technology1.forEach(data =>{
            cardsContainer.appendChild(cardInfo(data))
        })
    })
    .catch(error =>{
        return ("this is am", error)
    })

//     bootstrap.forEach(element => {
//         console.log(element)
//         cardsContainer.appendChild(cardInfo(element))   
    // });


function cardInfo(info){
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const picture = document.createElement("img");
    const authorsName = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    headline.textContent = info.headline;
    picture.src = info.authorPhoto;
    authorsName.textContent = info.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorsName);
    imgContainer.appendChild(picture);

    return card
}