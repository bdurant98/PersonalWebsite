/*
* This code sets up the night mode slider on the website and allows the toggle between the settings
*/

const body = document.querySelector('body');
const mainContent = document.querySelector('.mainContent');
const modeStatus = document.querySelector('.mode-status');
const modeToggle = document.getElementById("mode-toggle");

function toggleMode() {
    body.classList.toggle('night-mode');

    const modeMessage = body.classList.contains('night-mode') ?
    'Night mode'
    : 'Day mode';

    modeStatus.innerText = modeMessage;
}

modeToggle.addEventListener('click', toggleMode);


/*
* This code is for the fade in effect to be added on the projects cards on the projects page.
*/
 const projectCards = document.querySelectorAll(".project-card");
 const options = {
    threshold: 0.5
 }

 function addFadeIn (entries) {
    entries.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add("fade-in");
        }
    });
 }

 const observer = new IntersectionObserver(addFadeIn, options);

 projectCards.forEach(item => {
    observer.observe(item);
 });