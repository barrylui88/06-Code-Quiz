// Variables
let questionSection = document.querySelector("#questions");
let currentQuestion = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let answerChoice1 = document.querySelector("#choice1");
let answerChoice2 = document.querySelector("#choice2");
let answerChoice3 = document.querySelector("#choice3");
let answerChoice4 = document.querySelector("#choice4");
let currentQuestionIndex = 0;
let currentAnswerChoice1 = 0;
let currentAnswerChoice2 = 1;
let currentAnswerChoice3 = 2;
let currentAnswerChoice4 = 3;
let currentQuestionNumber = 1;

// Questions
let questionArray = [
    "1. Inside which HTML element do we put the JavaScript?",
    "2. Hi",
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
    "1","2","3","4"
]

// Correct Answers
let correctAnswersArray = [
    "<script>",
    "3"
]

// Event Listeners
startButton.addEventListener("click",showQuestionSection)
answerChoice1.addEventListener("click",evaluateAnswer)
answerChoice2.addEventListener("click",evaluateAnswer)
answerChoice3.addEventListener("click",evaluateAnswer)
answerChoice4.addEventListener("click",evaluateAnswer)

// Functions
function showQuestionSection () {
    startScreen.classList.add("hide");
    questionSection.classList.remove("hide");
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

function evaluateAnswer () {
    console.log(currentQuestionNumber);
    switch (currentQuestionNumber) {
        case 1:
            
        case 2:
            
    }
}

