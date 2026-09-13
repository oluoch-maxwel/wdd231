
const membersContainer = document.querySelector("#members");

const getMembers = async () => {
    try {
        const response = await fetch("members.json");

        if (!response.ok) {
            throw new Error(`HTTP error, ${response.status}`);
        }

        const data = await response.json();
        // console.table(data);
        displayMembers(data);

    } catch (error) {
        console.error(error.message);
    }
};

//<img src="images/${member.image}" alt="${member.name}"></img>
function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach((member) => {

        const card = document.createElement("article");

        card.innerHTML = `
            
            <h4>${member.name}</h4>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership: ${member.membership}</p>
        `;

        membersContainer.appendChild(card);
    });
}

getMembers();



const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("directory");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("directory");
});


// const Eldate = new Date().getFullYear();
const Elmodified = new Date().toLocaleString();
const CurrentYear = document.querySelector("#lastModified");
CurrentYear.textContent = Elmodified;


//hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
}); 