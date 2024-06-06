let score = 0;
let currentQuestionIndex = 0;

const questions = [
  {
    question: "Was ist die Hauptstadt von Portugal?",
    answers: ["Madrid", "Rom", "Budapest", "Lissabon"],
    correctAnswer: 3,
  },
  {
    question: "Wer ist der Präsident von Südkorea?",
    answers: ["Yoon Suk-yeol", "Kim Jong-un", "Tagashi Yamaoto", "Xi Xin Ping"],
    correctAnswer: 0,
  },
  {
    question: "Wie schwer ist ein Blauwal?",
    answers: ["150.000 kg", "30.000 kg", "8000 kg", "75.000 kg"],
    correctAnswer: 0,
  },
];

function displayQuestions() {
  let question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.addEventListener("click", () => checkAnswer(index));
    answersDiv.appendChild(answerButton);
  });

  document.getElementById("result").textContent = "";
  document.getElementById("next").style.display = "none";
}

function checkAnswer(selectedIndex) {
  let resultDiv = document.getElementById("result");
  if (selectedIndex === questions[currentQuestionIndex].correctAnswer) {
    score++;
    resultDiv.textContent = "Richtig!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Falsch!";
    resultDiv.style.color = "red";
  }
  document.getElementById("next").style.display = "block";
}

function displayNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestions();
  } else {
    document.getElementById(
      "quiz"
    ).innerHTML = `<h2>Quiz beendet! Ihre Punktzahl ist: ${score}</h2>`;
  }
}

displayQuestions();
