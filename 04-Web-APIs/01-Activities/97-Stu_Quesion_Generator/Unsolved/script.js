var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

function renderQuestion() {
  // write code to generate questions

  questionEl.textContent = questions[questionIndex].question;
  optionListEl.innerHTML = "";

  for (var i = 0; i < questions[questionIndex].choices.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = questions[questionIndex].choices[i];
    optionListEl.append(liEl);
  }
}

renderQuestion();

document
  .querySelector("#change-question")
  .addEventListener("click", function () {
    questionIndex++;
    renderQuestion();
  });
