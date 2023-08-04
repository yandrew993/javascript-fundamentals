"use strict";
//Question bank
const questionBank = [
  {
    question:
      "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
    option: ["Asia", "Africa", "Europe", "Australia"],
    answer: "Africa",
  },
  {
    question: "Garampani sanctuary is located at",
    option: [
      "Junagarh, Gujarat",
      "Diphu, Assam",
      "Kohima, Nagaland",
      "Gangtok, Sikkim",
    ],
    answer: "Diphu, Assam",
  },
  {
    question: "For which of the following disciplines is Nobel Prize awarded?",
    option: [
      "Physics and Chemistry",
      "Physiology or Medicine",
      "Literature, Peace and Economics",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Hitler party which came into power in 1933 is known as",
    option: ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democratic Party"],
    answer: "Nazi Party",
  },
  {
    question:
      "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",
    option: ["1967", "1968", "1958", "1922"],
    answer: "1967",
  },
];

let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scoreboard = document.getElementById("scoreboard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let next = document.querySelector(".next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");
let stats = document.getElementById("stat");
let answerBank = document.getElementById("answerBank");
let answers = document.getElementById("answers");
let remarks = document.getElementById("remarks");

let i = 0;
let score = 0;

//function to display questions
function displayQuestion() {
  for (let a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.textContent = "Q." + (i + 1) + " " + questionBank[i].question;
  option0.textContent = questionBank[i].option[0];
  option1.textContent = questionBank[i].option[1];
  option2.textContent = questionBank[i].option[2];
  option3.textContent = questionBank[i].option[3];
  stats.textContent =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
  if (e.textContent === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    if (score <= 3) {
      remarks.textContent = "Good Trial";
    } else {
      remarks.textContent = "Congratulation";
    }
    points.textContent = score + "/" + questionBank.length;
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

//click events to next button
next.addEventListener("click", nextQuestion);

//Back to Quiz button event
function backToQuiz() {
  location.reload();
}

//function to check Answers
function checkAnswer() {
  answerBank.style.display = "block";
  scoreboard.style.display = "none";
  for (let a = 0; a < questionBank.length; a++) {
    let list = document.createElement("li");
    list.textContent = questionBank[a].answer;
    answers.appendChild(list);
  }
}

displayQuestion();
