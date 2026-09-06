
const Eldate = new Date().getFullYear();
const Elmodified = new Date().toLocaleString();
const CurrentYear = document.querySelector("#currentyear");
const EllastModified = document.querySelector("#lastModified");

CurrentYear.innerHTML = `
<span>&copy;${Eldate} * Maxwel * Kitale, Kenya</span>
`
EllastModified.innerHTML = `
<span>Last Modification:<strong> ${Elmodified}<strong></span>
`

const hamburger = document.querySelector(".hamburger");
const NavMenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click',()=>{
    NavMenu.classList.toggle('open')
    
    if(NavMenu.classList.contains('open')){
        hamburger.textContent = 'X';
    }else{
        hamburger.textContent = '☰';
    }
})




const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const container = document.querySelector('#course-list');
const courseCount = document.querySelector('#course-count');
const courseCredit = document.querySelector('#course-credit');

function displayCourses(courseList){
    container.innerHTML='';

    const ul = document.createElement('ul');

    courseList.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.subject} ${course.number}`
        if(course.completed){
             li.textContent = `${course.subject} ${course.number}`
         }
        ul.appendChild(li);
    });

     container.appendChild(ul);

}
// displayCourses(courses);

const btnAll = document.querySelector('#all');
const btnCse = document.querySelector('#cse');
const btnWdd = document.querySelector('#wdd');

btnAll.addEventListener('click', () => {
    courseCredit.innerHTML = ''; 
    
    displayCourses(courses);
    courseCount.textContent = courses.length;

     const totalCredit = courseList.reduce((total, course) =>{
        return total + course.credits
     },0)

});

btnCse.addEventListener('click', ()=>{
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses)
    courseCount.textContent = cseCourses.length;
    
    const totalCredit = cseCourses.reduce((total, course) =>{
        return total + course.credits
     },0)

     courseCredit.innerHTML = `The total number of Credits:${totalCredit}`; 
});

btnWdd.addEventListener('click', ()=>{
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
    courseCount.textContent = wddCourses.length;

    const totalCredit = wddCourses.reduce((total, course) =>{
        return total + course.credits
     },0)

    courseCredit.innerHTML = `The total number of Credits:${totalCredit}`; 
})


displayCourses(courses);

























// function displayCourse(courseList){
//     container.innerHTML = '';

//     const ul = document.createElement('ul');

//     courseList.forEach(course =>{
//         const li = document.createElement('li');

//         if(course.completed){
//             li.textContent=`${course.subject} ${course.number}`;
//         }
        
//         ul.appendChild(li);
//         container.appendChild(ul)
//     })

    
// }
// // Event Listeners with Array Filter Method
// btnAll.addEventListener('click', () => {
//     displayCourses(courses);
// });

// btnCse.addEventListener('click', () => {
//     const cseCourses = courses.filter(course => course.subject === 'CSE');
//     displayCourses(cseCourses);
// });

// btnWdd.addEventListener('click', () => {
//     const wddCourses = courses.filter(course => course.subject === 'WDD');
//     displayCourses(wddCourses);
// });

// // Initial display on page load
// displayCourses(courses);