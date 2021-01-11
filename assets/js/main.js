// INITIALIZATION
var pageContainer = document.getElementById('page-container');
var startButton = document.getElementById('start-button');
var startHeading = document.getElementById('start-heading');
var startDescription = document.getElementById('start-description');
var currentQuestion = 0;

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

var secondQuestion = {
    question: 'You can use arrays on Javascript to store: ',
    answers: ['Numbers and Strings', 'Booleans', 'Other Arrays', 'All of the above'],
    correctAnswer: 3 //INDEX 0
}

var allTheQuestions = [firstQuestion, secondQuestion];

// ------------------------------------------------------------------------
// FUNCTIONS

function setClickEvents(i, rightAnswer) {
    var possibleAnswer = document.getElementById('possible' + i);
    possibleAnswer.addEventListener('click', function () {
        currentQuestion++;
        var selectedAnswer = Number(possibleAnswer.dataset['index']);
        if (selectedAnswer === rightAnswer) {
            console.log('correct');
        } else {
            console.log('wrong');
        }

        console.log(currentQuestion);

        if (currentQuestion === allTheQuestions.length) {
            cleanScreen();
            console.log('no more questions');
        } else {
            displayQuestion(allTheQuestions[currentQuestion]);
        }
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
    questionObject.answers.forEach(function (answer) {
            var answerButton = document.createElement('button');
            answerButton.textContent = answer;
            // Gives the possible answer an id of possible plus the index of the answer in the array
            answerButton.id = 'possible' + questionObject.answers.indexOf(answer);
            answerButton.setAttribute('data-index', questionObject.answers.indexOf(answer));
            pageContainer.appendChild(answerButton);
            // Calls function to set the event listeners of the different possible answers
            setClickEvents(questionObject.answers.indexOf(answer), questionObject.correctAnswer);
        });
}

function cleanScreen() {
    while (pageContainer.firstChild) {
        pageContainer.removeChild(pageContainer.firstChild);
    }
}

function startQuiz() {
    displayQuestion(allTheQuestions[currentQuestion])
}

startButton.addEventListener('click', startQuiz);
