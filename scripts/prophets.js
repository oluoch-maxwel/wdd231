const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");

const getProphetData = async () => {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }

     const data = await response.json();
    //  console.table(data.prophets)

    displayProphets(data.prophets);
     
    } catch (error) {
        console.error(error);
    }
}

const displayProphets = (prophets) => {
    cards.innerHTML = '';

    prophets.forEach((prophet) => {

        // Create elements
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let lastname = document.createElement('p');
        let birthdate = document.createElement('p');
        let death = document.createElement('p');
        let length = document.createElement('p');
        let order = document.createElement('p');
        let birthplace = document.createElement('p');
        let numofchildren = document.createElement('p');
        let portrait = document.createElement('img');

        // Add content
        name.textContent = prophet.name;
        lastname.textContent = prophet.lastname;
        birthdate.textContent = prophet.birthdate;
        death.textContent = prophet.death;
        length.textContent = prophet.length;
        order.textContent = prophet.order;
        birthplace.textContent = prophet.birthplace;
        numofchildren.textContent = prophet.numofchildren;

        // Add image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height','250');

        // Put elements inside the card
        card.innerHTML = `
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <p>Date of Birth: ${prophet.birthdate}</p>
        <p>Place of Birth: ${prophet.birthplace}</p>
        <img 
            src="${prophet.imageurl}"
            alt="Portrait of ${prophet.name} ${prophet.lastname}"
            loading="lazy"
            width="200"
            height="250">
       `;


        // Put card on the webpage
        cards.appendChild(card);
    });
};

getProphetData();