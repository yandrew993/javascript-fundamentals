const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Rome"],
    correctAnswer: 0,
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: 2,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const scoreElement = document.getElementById("score");

  if (currentQuestion < quizData.length) {
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.setAttribute("onclick", `checkAnswer(${index})`); // Add this line
      optionsElement.appendChild(button);
    });

    scoreElement.textContent = `Score: ${score}`; // Add this line
  } else {
    questionElement.textContent = "Quiz is over!";
    optionsElement.innerHTML = "";
    scoreElement.textContent = `Final Score: ${score}`;
  }
}

function checkAnswer(selectedOption) {
  if (selectedOption === quizData[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;
  displayQuestion();
}

displayQuestion();
