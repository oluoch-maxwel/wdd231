// ===============================
// FOOTER
// ===============================

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


// ===============================
// HAMBURGER MENU
// ===============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }
});


// ===============================
// COURSES
// ===============================

const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce students to programming.",
        technology: ["Python"],
        completed: false
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces students to the World Wide Web.",
        technology: ["HTML", "CSS"],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Students learn to write and use functions.",
        technology: ["Python"],
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces classes and objects.",
        technology: ["C#"],
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Students learn to create dynamic websites.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Students focus on frontend web development.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    }
];


// ===============================
// ELEMENTS
// ===============================

const container = document.querySelector("#course-list");
const courseCount = document.querySelector("#course-count");
const courseCredit = document.querySelector("#course-credit");

const btnAll = document.querySelector("#all");
const btnCse = document.querySelector("#cse");
const btnWdd = document.querySelector("#wdd");


// ===============================
// DISPLAY COURSES
// ===============================

function displayCourses(courseList) {

    container.innerHTML = "";

    const ul = document.createElement("ul");

    courseList.forEach(course => {

        const li = document.createElement("li");

        li.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            li.classList.add("completed");
        }

        ul.appendChild(li);
    });

    container.appendChild(ul);
}


// ===============================
// CALCULATE CREDITS
// ===============================

function calculateCredits(courseList) {

    return courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);
}


// ===============================
// ALL COURSES
// ===============================

btnAll.addEventListener("click", () => {

    displayCourses(courses);

    courseCount.textContent = courses.length;

    const totalCredit = calculateCredits(courses);

    courseCredit.textContent =
        `The total number of Credits: ${totalCredit}`;
});


// ===============================
// CSE COURSES
// ===============================

btnCse.addEventListener("click", () => {

    const cseCourses = courses.filter(
        course => course.subject === "CSE"
    );

    displayCourses(cseCourses);

    courseCount.textContent = cseCourses.length;

    const totalCredit = calculateCredits(cseCourses);

    courseCredit.textContent =
        `The total number of Credits: ${totalCredit}`;
});


// ===============================
// WDD COURSES
// ===============================

btnWdd.addEventListener("click", () => {

    const wddCourses = courses.filter(
        course => course.subject === "WDD"
    );

    displayCourses(wddCourses);

    courseCount.textContent = wddCourses.length;

    const totalCredit = calculateCredits(wddCourses);

    courseCredit.textContent =
        `The total number of Credits: ${totalCredit}`;
});


// ===============================
// INITIAL DISPLAY
// ===============================

displayCourses(courses);
courseCount.textContent = courses.length;
courseCredit.textContent =
    `The total number of Credits: ${calculateCredits(courses)}`;