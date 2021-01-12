// INITIALIZATION
var pageContainer = document.getElementById('page-container');
var startButton = document.getElementById('start-button');
var startHeading = document.getElementById('start-heading');
var startDescription = document.getElementById('start-description');
var timerElement = document.getElementById('timer');
var currentQuestion = 0;
var isFinished = false;
// Questions of the quiz

var allTheQuestions = [
    {
        // The question is a string that will be displayed
        question: 'Which one is NOT a data type of Javascript:',
        // The answers is an array with different strings that can be selected
        answers: ['Boolean', 'Alert', 'String', 'Number'],
        // The correctAnswer is the index of the correct answer in the array
        // With Index 0
        correctAnswer: 1
    },
    {
        question: 'You can use arrays on Javascript to store: ',
        answers: ['Numbers and Strings', 'Booleans', 'Other Arrays', 'All of the above'],
        correctAnswer: 3 //INDEX 0
    },
    {
        question: 'What does DOM stand for:',
        answers: ['Desktop Object Model', 'Disk Old Memory', 'Document Object Model', 'Dashboard Online Modifier'],
        correctAnswer: 2//INDEX 0
    },
    {
        question: 'Which one is a JS Library:',
        answers: ['Jquery', 'Bootstrap', 'SASS', 'SQL'],
        correctAnswer: 0//INDEX 0
    },
    {
        question: 'To declare a string you have to enclose it between:',
        answers: ['Parenthesis', 'Curly braces', 'Quotation Marks', 'Semicolons'],
        correctAnswer: 2//INDEX 0
    }
];

// ------------------------------------------------------------------------
// FUNCTIONS
// Timer
var secondsLeft = 75;
function setTimer() {
    var timerInterval = setInterval(function () {
        if (isFinished === false) {
            secondsLeft--;
            timerElement.textContent = secondsLeft;

            if (secondsLeft === 0 || secondsLeft < 0) {
                clearInterval(timerInterval);
                endQuiz(secondsLeft);
            }
            
        }
        
    }, 1000)
}

function setClickEvents(i, rightAnswer) {
    var possibleAnswer = document.getElementById('possible' + i);
    possibleAnswer.addEventListener('click', function () {
        currentQuestion++;
        var selectedAnswer = Number(possibleAnswer.dataset['index']);
        if (selectedAnswer === rightAnswer) {
            console.log('correct');
        } else {
            secondsLeft = secondsLeft - 10;
            console.log('wrong');
        }

        if (currentQuestion === allTheQuestions.length) {
            cleanScreen();
            endQuiz(secondsLeft);
            timerElement.textContent = secondsLeft;
        } else {
            displayQuestion(allTheQuestions[currentQuestion]);
        }
    })
}

// Finish quiz
function endQuiz(score) {
    isFinished = true;
    cleanScreen();
    var endHeading = document.createElement('h2');
    endHeading.textContent = 'All Done';
    pageContainer.appendChild(endHeading);

    var endScore = document.createElement('p');
    endScore.textContent = 'Your Score is ' + score + '.';
    pageContainer.appendChild(endScore);
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
    setTimer();
    displayQuestion(allTheQuestions[currentQuestion])
}

startButton.addEventListener('click', startQuiz);
