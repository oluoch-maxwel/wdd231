
const discovergrid = document.querySelector("#discover-grid");

async function getDiscoverPlaces() {
    try {
        
        const response = await fetch("data/discoveries.json");

        if (!response.ok) {
            throw new Error("Could not load file from dicoveries.json");
        }
         
        const data = await response.json();
        // console.log(data)
        displayDiscoverPlaces(data);

    } catch (error) {
        console.error()
    }
}

function displayDiscoverPlaces(places) {
    discovergrid.innerHTML = "";

    places.forEach((place) => {
        console.log(place.image)
        const card = document.createElement("article");
        
        card.innerHTML = `
           <img src="${place.image}" alt="${place.alt}" loading="lazy">

           <div class="card-content">
                    <h2>${place.name}</h2>

                    <p class="address"> ${place.address}</p>

                    <p>
                        ${place.description}
                    </p>
                    <a href="${place.link}">Learn more</a>
                </div>
        `;

        discovergrid.appendChild(card);

     })
}
getDiscoverPlaces();



const menu = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menu.addEventListener("click", () => {
    navigation.classList.toggle("open");
});



// Footer

const currentYear = new Date().getFullYear();
const copyYear = document.querySelector('#year');
copyYear.textContent = currentYear;



const lastmodify = new Date().toLocaleString();

const lastmod = document.querySelector('#lastModified');

lastmod.textContent = lastmodify;