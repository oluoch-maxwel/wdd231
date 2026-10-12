const destinationContainer = document.querySelector(".destination");

async function getDestinations() {
    try {
        const response = await fetch("data/destinations.json");

        if (!response.ok) {
            throw new Error("Could not load destinations");
        }

        const destinations = await response.json();

        // get random Feature destination
        const shuffleDestination = destinations.sort(() => {
           return Math.random() - 0.5;
        });
       


        // display four
        const fourDestinations = shuffleDestination.slice(0,4);


        destinationContainer.innerHTML = fourDestinations.map(destination => `
            <div class="destination-card">
                <img src="${destination.image}" alt="${destination.alt}">

                <div class="card-info">
                    <h3>${destination.name}</h3>
                    <h4>${destination.county}</h4>
                    <a href="${destination.destinationLink}">View More</a>
                </div>
            </div>
        `).join("");


    } catch (error) {
        console.error("Error loading destinations:", error);
    }
}

getDestinations();