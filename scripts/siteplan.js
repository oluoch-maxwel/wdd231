
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

currentYearElement.innerHTML = `
    <span>&copy; ${currentYear} * Maxwel * Kitale, Kenya</span>
`;

lastModifiedElement.innerHTML = `
    <span>Last Modification: <strong>${lastModified}</strong></span>
`;
