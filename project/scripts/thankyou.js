
const params = new URLSearchParams(window.location.search);

function displayValue(elementId, parameterName) {
    const element = document.querySelector(`#${elementId}`);
    const value = params.get(parameterName);

    if (element && value) {
        element.textContent = value;
    }
}

displayValue("display-name", "full-name");
displayValue("display-email", "email");
displayValue("display-type", "destination-type");
displayValue("display-county", "county");
displayValue("display-budget", "budget");
displayValue("display-travelers", "travelers");
displayValue("display-month", "travel-month");

const activities = params.getAll("activities");
const activitiesElement = document.querySelector("#display-activities");

if (activities.length > 0) {
    activitiesElement.textContent = activities.join(", ");
}

document.querySelector("#year").textContent =
    new Date().getFullYear();