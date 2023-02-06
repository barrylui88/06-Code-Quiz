// Variables
let questionSection = document.querySelector("#questions");
let currentQuestion = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");

// Questions
let q1;
let q2;
let q3;
let q4;
let q5;
let q6;
let q7;
let q8;
let q9;
let q10;
let q11;
let q12;
let q13;
let q14;
let q15;
let q16;
let q17;
let q18;
let q19;
let q20;

// Answer Choices
let q1a1;
let q1a2;
let q1a3;
let q1a4;
let q2a1;
let q2a2;
let q2a3;
let q2a4;
let q3a1;
let q3a2;
let q3a3;
let q3a4;
let q4a1;
let q4a2;
let q4a3;
let q4a4;
let q5a1;
let q5a2;
let q5a3;
let q5a4;
let q6a1;
let q6a2;
let q6a3;
let q6a4;
let q7a1;
let q7a2;
let q7a3;
let q7a4;
let q8a1;
let q8a2;
let q8a3;
let q8a4;
let q9a1;
let q9a2;
let q9a3;
let q9a4;
let q10a1;
let q10a2;
let q10a3;
let q10a4;
let q11a1;
let q11a2;
let q11a3;
let q11a4;
let q12a1;
let q12a2;
let q12a3;
let q12a4;
let q13a1;
let q13a2;
let q13a3;
let q13a4;
let q14a1;
let q14a2;
let q14a3;
let q14a4;
let q15a1;
let q15a2;
let q15a3;
let q15a4;
let q16a1;
let q16a2;
let q16a3;
let q16a4;
let q17a1;
let q17a2;
let q17a3;
let q17a4;
let q18a1;
let q18a2;
let q18a3;
let q18a4;
let q19a1;
let q19a2;
let q19a3;
let q19a4;
let q20a1;
let q20a2;
let q20a3;
let q20a4;

// Correct Answers
let q1ca;
let q2ca;
let q3ca;
let q4ca;
let q5ca;
let q6ca;
let q7ca;
let q8ca;
let q9ca;
let q10ca;
let q11ca;
let q12ca;
let q13ca;
let q14ca;
let q15ca;
let q16ca;
let q17ca;
let q18ca;
let q19ca;
let q20ca;

// Event Listeners
startButton.addEventListener("click",showQuestionSection)

// Functions
function showQuestionSection () {
    startScreen.classList.add("hide");
    questionSection.classList.remove("hide");
    currentQuestion.textContent = q1
}
