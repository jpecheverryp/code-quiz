var startButton = document.getElementById('start-button');
var startHeading = document.getElementById('start-heading');
var startDescription = document.getElementById('start-description');


function removeStartScreen() {
    startHeading.remove();
    startDescription.remove();
    startButton.remove();
}

function startQuiz() {
    removeStartScreen();
}

startButton.addEventListener('click', startQuiz)