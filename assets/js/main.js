// INITIALIZATION
var pageContainer = document.getElementById('page-container');
var startButton = document.getElementById('start-button');
var startHeading = document.getElementById('start-heading');
var startDescription = document.getElementById('start-description');

// Questions of the quiz
var firstQuestion = {
    // The question is a string that will be displayed
    question: 'Which one is NOT a data type of Javascript:',
    // The answers is an array with different strings that can be selected
    answers: ['Boolean', 'Alert', 'String', 'Number'],
    // The correctAnswer is the index of the correct answer in the array
    // With Index 0
    correctAnswer: 1
}

function setClickEvents(i) {
    var possible = document.getElementById('possible' + i);
    possible.addEventListener('click', function () {
        console.log(possible.dataset['index']);
    })
}

// Cleans the screen and adds a heading2 and 4 buttons using the question object
function displayQuestion(questionObject) {
    cleanScreen();
    // Creates heading element
    var questionHeading = document.createElement('h2');
    // Asigns question to the heading
    questionHeading.textContent = questionObject.question;
    // Appends heading to page
    pageContainer.appendChild(questionHeading);

    // Creates a button for each possible answer and appends it to page
    questionObject.answers.forEach(answer => {
        var answerButton = document.createElement('button');
        answerButton.textContent = answer;
        // Gives the possible answer an id of possible plus the index of the answer in the array
        answerButton.id = 'possible' + questionObject.answers.indexOf(answer);
        answerButton.setAttribute('data-index', questionObject.answers.indexOf(answer))
        pageContainer.appendChild(answerButton);
        // Calls function to set the event listeners of the different possible answers
        setClickEvents(questionObject.answers.indexOf(answer));
    });
    
}

function cleanScreen() {
    while(pageContainer.firstChild) {
        pageContainer.removeChild(pageContainer.firstChild);
    }
}

function startQuiz() {
    displayQuestion(firstQuestion);
}

startButton.addEventListener('click', startQuiz);
