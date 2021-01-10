// INITIALIZATION
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

function displayQuestion(questionObject) {
    var questionHeading = document.createElement('h2');
    questionHeading.textContent = questionObject.question;
    document.body.append(questionHeading);

    questionObject.answers.forEach(answer => {
        var answerButton = document.createElement('button');
        answerButton.textContent = answer;
        document.body.append(answerButton)
    });
}

function removeStartScreen() {
    startHeading.remove();
    startDescription.remove();
    startButton.remove();
}

function startQuiz() {
    removeStartScreen();
    console.log(firstQuestion);
    displayQuestion(firstQuestion)
}

startButton.addEventListener('click', startQuiz)