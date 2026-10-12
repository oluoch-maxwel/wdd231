const exploreContainer = document.querySelector('.explore');
const modalContainer = document.querySelector('.destination-modal');

let destinations = [];

// Load destinations from the original JSON file
async function getDestinations() {
    try {
        const response = await fetch('data/destinations.json');

        if (!response.ok) {
            throw new Error(`Could not load destinations: ${response.status}`);
        }

        destinations = await response.json();
        displayDestinations(destinations);

    } catch (error) {
        console.error('Error loading destinations:', error);
    }
}

// Display destination cards
function displayDestinations(destinationsToDisplay) {
    exploreContainer.innerHTML = '';

    destinationsToDisplay.forEach(destination => {
        const exploreCard = document.createElement('article');
        exploreCard.classList.add('explore-card');

        exploreCard.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <div class=card-info>
                <h3>${destination.name}</h3>
                <p><strong>Activities:</strong> ${destination.activities.join(', ')}</p>
                <button class="modal-open" data-id="${destination.id}">
                    More Info
                </button>
            </div>
        `;

        exploreContainer.appendChild(exploreCard);
    });
}

// Destination filtering
const allDestinationBtn = document.querySelector('.btn-all');
const natureDestinationBtn = document.querySelector('.btn-nature');
const wildlifeDestinationBtn = document.querySelector('.btn-wildlife');
const beachDestinationBtn = document.querySelector('.btn-beach');
const cultureDestinationBtn = document.querySelector('.btn-culture');
// const adventureDestinationBtn = document.querySelector('.btn-adventure');

allDestinationBtn.addEventListener('click', () => {
    displayDestinations(destinations);
});

natureDestinationBtn.addEventListener('click', () => {
    displayDestinations(
        destinations.filter(destination => destination.type === 'nature')
    );
});

wildlifeDestinationBtn.addEventListener('click', () => {
    displayDestinations(
        destinations.filter(destination => destination.type === 'wildlife')
    );
});

beachDestinationBtn.addEventListener('click', () => {
    displayDestinations(
        destinations.filter(destination => destination.type === 'beach')
    );
});

cultureDestinationBtn.addEventListener('click', () => {
    displayDestinations(
        destinations.filter(destination => destination.type === 'culture')
    );
});

// adventureDestinationBtn.addEventListener('click', () => {
//     displayDestinations(
//         destinations.filter(destination => destination.type === 'adventure')
//     );
// });

// Open the correct destination modal
exploreContainer.addEventListener('click', event => {
    const button = event.target.closest('.modal-open');

    if (!button) return;

    const destinationId = button.dataset.id;
    const destination = destinations.find(
        item => item.id === destinationId
    );

    if (!destination) return;

    modalContainer.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">
                &times;
            </button>

            <img src="${destination.image}" alt="${destination.name}">

            <h2>${destination.name}</h2>

            <p><strong>County:</strong> ${destination.county}</p>

            <p><strong>Category:</strong> ${destination.category}</p>

            <p><strong>Description:</strong> ${destination.description}</p>

            <p><strong>Activities:</strong>
                ${destination.activities.join(', ')}
            </p>

            <p><strong>Entrance Fee:</strong>
                ${destination.entranceFee ?? 'Confirm current fees'}
            </p>

            <p><strong>Transport Estimate:</strong>
                ${destination.transportEstimate ?? 'Confirm transport costs'}
            </p>

            <p><strong>Food Estimate:</strong>
                ${destination.foodEstimate ?? 'Estimate your food budget'}
            </p>

            <p><strong>Activity Estimate:</strong>
                ${destination.activityEstimate ?? 'Confirm activity costs'}
            </p>

            <p><strong>Best Time:</strong> ${destination.bestTime}</p>

            <p><strong>Duration:</strong> ${destination.duration}</p>

            <p><strong>Student Tips:</strong>
                ${destination.studentTips ?? 'Plan your visit in advance.'}
            </p>

            <p><strong>Location:</strong> ${destination.location}</p>

            <p>
                <a href="${destination.officialLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    More Information
                </a>
            </p>
        </div>
    `;

    modalContainer.showModal();
});

// Close modal when the close button is clicked
modalContainer.addEventListener('click', event => {
    if (event.target.closest('.modal-close')) {
        modalContainer.close();
    }
});

// Close modal when clicking outside its content
modalContainer.addEventListener('click', event => {
    if (event.target === modalContainer) {
        modalContainer.close();
    }
});

getDestinations();



// Time stamp
const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

// Hamburger menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#menu-list");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("show");
    });
}

// Footer
const currentYear = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = `Last modified: ${document.lastModified}`;
}


