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

