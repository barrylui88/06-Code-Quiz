// Variables
let questionSection = document.querySelector("#questions");
let currentQuestion = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let answerChoice1 = document.querySelector("#choices").children[0];
let answerChoice2 = document.querySelector("#choices").children[1];
let answerChoice3 = document.querySelector("#choices").children[2];
let answerChoice4 = document.querySelector("#choices").children[3];
let currentQuestionIndex = 0;
let currentAnswerChoice1 = 0;
let currentAnswerChoice2 = 1;
let currentAnswerChoice3 = 2;
let currentAnswerChoice4 = 3;
let currentQuestionNumber = 1;
let correctAudio = new Audio("./assets/sfx/correct.wav");
let wrongAudio = new Audio("./assets/sfx/incorrect.wav");
let feedbackSection = document.querySelector("#feedback");
let latestPlayerScore = 0;

// Questions
let questionArray = [
    "1. Inside which HTML element do we put the JavaScript?",
    "2. Who invented JavaScript?",
    "3. ",
    "4. ",
    "5. ",
    "6. ",
    "7. ",
    "8. ",
    "9. ",
    "10. ",
    "11. ",
    "12. ",
    "13. ",
    "14. ",
    "15. ",
    "16. ",
    "17. ",
    "18. ",
    "19. ",
    "20. "
]

// Answer Choices
let answerChoicesArray = [
    "<javascript>","<script>","<scripting>","<js>",
    "Douglas Crockford","Sheryl Sandberg","Brendan Eich","Elon Musk"
]

// Event Listeners
startButton.addEventListener("click",showQuestionSection);
answerChoice1.addEventListener("click", () => evaluateAnswer(1));
answerChoice2.addEventListener("click", () => evaluateAnswer(2));
answerChoice3.addEventListener("click", () => evaluateAnswer(3));
answerChoice4.addEventListener("click", () => evaluateAnswer(4));

// Functions
function showQuestionSection () {
    startScreen.classList.add("hide");
    questionSection.classList.remove("hide");
    feedbackSection.classList.remove("hide");
    showNextQuestion();    
}

function showNextQuestion () {
    currentQuestion.textContent = questionArray[currentQuestionIndex];
    choices.children[0].textContent = "1. " + answerChoicesArray[currentAnswerChoice1];
    choices.children[1].textContent = "2. " + answerChoicesArray[currentAnswerChoice2];
    choices.children[2].textContent = "3. " + answerChoicesArray[currentAnswerChoice3];
    choices.children[3].textContent = "4. " + answerChoicesArray[currentAnswerChoice4];
    currentQuestionIndex++;
    currentAnswerChoice1 += 4;
    currentAnswerChoice2 += 4;
    currentAnswerChoice3 += 4;
    currentAnswerChoice4 += 4;
}

function evaluateAnswer (choice) {
    switch (currentQuestionNumber) {
        case 1:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 2:
            if (choice === 3) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 3:
            if (choice === 3) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 4:
            if (choice === 4) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 5:
            if (choice === 1) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 6:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 7:
            if (choice === 3) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 8:
            if (choice === 4) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 9:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 10:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 11:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 12:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 13:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 14:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 15:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 16:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 17:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 18:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 19:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 20:
            if (choice === 2) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
    }
    currentQuestionNumber++;
    showNextQuestion();
}

function correctAnswer () {
    correctAudio.play();
    latestPlayerScore++;
    feedbackSection.textContent = "Correct!"
}

function wrongAnswer () {
    wrongAudio.play();
    feedbackSection.textContent = "Incorrect!"
}