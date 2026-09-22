// ==========BUSINESS SPOTLIGHTS============

const spotlightContainer = document.querySelector("#card");

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not load members.json");
        }

        // An array from the JSON file
        const members = await response.json();

        // only Gold and Silver members
        const eligibleMembers = members.filter(member =>
            member.membership === "Gold" ||
            member.membership === "Silver"
        );

        // Members randomly
        const shuffledMembers = eligibleMembers.sort(
            () => Math.random() - 0.5
        );

        // Select 3 members
        const selectedMembers = shuffledMembers.slice(0, 3);

        // Display the cards
        selectedMembers.forEach(member => {

            const card = document.createElement("article");

            card.classList.add("spotlight-card");

            card.innerHTML = `
                <img src="images/${member.image}" 
                     alt="${member.name} logo"
                     loading="lazy">

                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p class="membership">
                    ${member.membership} Member
                </p>

                <a href="${member.website}" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Learn More
                </a>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading business spotlights:", error);

        spotlightContainer.innerHTML = `
            <p>Unable to load business spotlights.</p>
        `;
    }
}

// Run the function
loadSpotlights();



// ==========KITALE WEATHER============

const API_KEY = "b07c5d428b2a6d05001eadedc800491b";

const latitude = 1.02;
const longitude = 35.00;

const currentWeather = document.querySelector("#weather-current");
const forecastContainer = document.querySelector("#forecast");

// OpenWeatherMap URLs
const currentURL =
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;


async function loadWeather() {

    try {

        // Get current weather and forecast at the same time
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentURL),
            fetch(forecastURL)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error("Weather data could not be loaded.");
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();


        // ===============CURRENT WEATHER=================

        currentWeather.innerHTML = `
            <p class="temperature">
                ${Math.round(currentData.main.temp)}°C
            </p>

            <p class="description">
                ${currentData.weather[0].description}
            </p>
        `;



        // ===============THREE-DAY FORECAST=================

        const dailyForecast = {};

        forecastData.list.forEach(item => {

            // Convert Unix timestamp to date
            const date = new Date(item.dt * 1000);

            const dateKey = date.toLocaleDateString("en-CA", {
                timeZone: "Africa/Nairobi"
            });

            // Create a new day
            if (!dailyForecast[dateKey]) {
                dailyForecast[dateKey] = [];
            }

            dailyForecast[dateKey].push(item);
        });


        // Get the next 3 days
        const forecastDays = Object.keys(dailyForecast).slice(1, 5);


        forecastContainer.innerHTML = `
            <h3>3-Day Forecast</h3>
        `;


        forecastDays.forEach(day => {

            const dayData = dailyForecast[day];

            // Get the temperatures for the day
            const temperatures = dayData.map(
                item => item.main.temp
            );

            const minTemp = Math.min(...temperatures);
            const maxTemp = Math.max(...temperatures);

            // Use the middle forecast for the description
            const middleIndex = Math.floor(dayData.length / 2);
            const weatherDescription =
                dayData[middleIndex].weather[0].description;

            // Format date
            const formattedDate = new Date(`${day}T12:00:00`)
                .toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                });


            const forecastCard = document.createElement("article");
            const weatherContainer = document.querySelector("#weather-forecast");

            forecastCard.classList.add("forecast-card");

            forecastCard.innerHTML = `
                <h4>${formattedDate}</h4>

                <p class="forecast-temperature">
                    ${Math.round(minTemp)}°C -
                    ${Math.round(maxTemp)}°C
                </p>

                <p>${weatherDescription}</p>
            `;

            forecastContainer.appendChild(forecastCard);
            weatherContainer.appendChild(forecastContainer);


        });

    } catch (error) {

        console.error("Weather error:", error);

        currentWeather.innerHTML = `
            <p>Weather information is currently unavailable.</p>
        `;

        forecastContainer.innerHTML = `
            <p>Forecast information is currently unavailable.</p>
        `;
    }
}


// Load weather
loadWeather();




// Footer

const currentYear = new Date().getFullYear();
const copyYear = document.querySelector('#year');
copyYear.textContent = currentYear;



const lastmodify = new Date().toLocaleString();

const lastmod = document.querySelector('#lastModified');

lastmod.textContent = lastmodify;
