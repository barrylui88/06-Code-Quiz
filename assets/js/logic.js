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
let endScreen = document.querySelector("#end-screen");
let finalScoreText = document.querySelector("#final-score");
let playerInitials = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");
let scoreForStorage = {};

// Questions
let questionArray = [
    "1. What does HTML stand for?",
    "2. What does CSS stand for?",
    "3. What does JS stand for?",
    "4. In terms of CSS Positioning, what does Absolute mean?",
    "5. In terms of CSS Positioning, what does Relative mean?",
    "6. In terms of CSS Positioning, what does Fixed mean?",
    "7. In CSS, what key do we use to select an ID?",
    "8. In CSS, what key do we use to select a class?",
    "9. In CSS, what key do we use to select an entire element?",
    "10. What is Bootstrap?",
    "11. What does DOM stand for?",
    "12. If you run console.log(document.documentElement), will you get the DOCTYPE HTML line?",
    "13. What index does an array start at?",
    "14. What will document.querySelectorAll(\"div\") select?",
    "15. How many milliseconds are there in a second?",
    "16. After using setInterval, why should you use clearInterval?",
    "17. What is an event listener?",
    "18. What is NOT an example of an event",
    "19. What is the storage limit when using browser localStorage?",
    "20. What does JSON.stringify(objectname) do?"
]

// Answer Choices
let answerChoicesArray = [
    "HyperText Markup Language","High Tech Machine Learning","Hyper Tech Machine Language","HyperText Machine Language",
    "Cyber Security System","Cyber Strong Security","Cascading Style Sheets","Cache System Store",
    "Just Start","JavaScript","JavaScripting","Just Strings",
    "Item can only be shown and can not be hidden","Item will be positioned in the precise location specified","Item will be repositioned from where it is supposed to be","Stays in a fixed position of the viewport of the screen and doesn't move even when scrolling",
    "Item can only be shown and can not be hidden","Item will be positioned in the precise location specified","Item will be repositioned from where it is supposed to be","Stays in a fixed position of the viewport of the screen and doesn't move even when scrolling",
    "Item can only be shown and can not be hidden","Item will be positioned in the precise location specified","Item will be repositioned from where it is supposed to be","Stays in a fixed position of the viewport of the screen and doesn't move even when scrolling",
    "#","No key needed","\\",".",
    "#","No key needed","\\",".",
    "#","No key needed","\\",".",
    "A strap to fasten a boot","An extremely fast computer","A popular CSS framework to rapidly build websites","A powerful engine for a car",
    "Document Object Model","Document Orientation Model","Document Orientation Machine","Document Object Machine",
    "Yes","No","You might depending on the browser","You might depending on your OS",
    "-1","1","100","0",
    "It will search for an HTML element with the ID of div","It will select all div elements in an HTML document","It will always return nothing","It will always return an error",
    "10","100","1000","10000",
    "Without it, the function will continue to execute forever","The computer will explode","The code is much neater when you use it","Without it, the browser will return an error",
    "A nosy person","Code that listens for events and executes a function when triggered","A developer who searches for events to go to","A website that lists great events around you",
    "click","change","keydown","closebrowser",
    "1GB","1MB","5MB","10MB",
    "Converts strings into a JSON Object","Converts JSON Objects into strings","Converts Javascript Arrays into Strings","Converts Strings into Javascript Arrays"
]

// Event Listeners
startButton.addEventListener("click",showQuestionSection);
answerChoice1.addEventListener("click", () => evaluateAnswer(1));
answerChoice2.addEventListener("click", () => evaluateAnswer(2));
answerChoice3.addEventListener("click", () => evaluateAnswer(3));
answerChoice4.addEventListener("click", () => evaluateAnswer(4));
submitButton.addEventListener("click",submitScore);

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
            if (choice === 1) {
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
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 4:
            if (choice === 2) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 5:
            if (choice === 3) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 6:
            if (choice === 4) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 7:
            if (choice === 1) {
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
            if (choice === 3) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 11:
            if (choice === 1) {
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
            if (choice === 4) {
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
            if (choice === 3) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 16:
            if (choice === 1) {
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
            if (choice === 4) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 19:
            if (choice === 3) {
                correctAnswer();
                break;
            } else {
                wrongAnswer();
                break;
            }
        case 20:
            if (choice === 2) {
                correctAnswer();
                showEndScreen();
            } else {
                wrongAnswer();
                showEndScreen();
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

function showEndScreen () {
    questionSection.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScoreText.textContent = latestPlayerScore;
    console.log(latestPlayerScore);
}

function submitScore () {
    let playerInitialsEntered = playerInitials.value
    scoreForStorage[playerInitialsEntered] = latestPlayerScore;
    localStorage.setItem("scores", JSON.stringify(scoreForStorage))
}