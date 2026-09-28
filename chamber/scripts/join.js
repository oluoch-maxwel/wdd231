const modalButtons = document.querySelectorAll(".modal-open");

// Open modal
modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);

        modal.showModal();
    });
});


// Close modal
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-close")) {
        const modal = event.target.closest("dialog");

        modal.close();
    }
});


// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("modal-close")) {
//         console.log("Close button clicked");

//         const modal = event.target.closest("dialog");

//         console.log(modal);

//         modal.close();
//     }
// });



// time-stamp
const timestamp = document.querySelector("#timestamp");

timestamp.value = new Date().toISOString();




// Footer

const currentYear = new Date().getFullYear();
const copyYear = document.querySelector('#year');
copyYear.textContent = currentYear;



const lastmodify = new Date().toLocaleString();

const lastmod = document.querySelector('#lastModified');

lastmod.textContent = lastmodify;
