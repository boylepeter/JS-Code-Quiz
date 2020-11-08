const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;
let countRightAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  var sec = 60;
  var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec === 0) {
        clearInterval(time);
        alert("Pencils down!");
        localStorage.setItem(countRightAnswers)
        window.location.href = "./HighScore.html";
    }
}
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  } 
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
}
document.getElementById('right-answers').innerHTML = countRightAnswers + "/11 Right!";
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}




let questions = [
    { question : "Javascript is...",
      answers: [{text: "A library used to simplify HTML DOM", correct: false},
      {text: "A programming language used to make web pages interactive", correct: true},
      {text: "A hypertext markup language", correct: false},
      {text: "A half goat half demon", correct: false}]
    },
    {question : "Null is...",
     answers: [{text: "A representation of the intentional absence of anything", correct: true},
     {text: "0", correct: false},
     {text: "Punishes children who misbehave", correct: false},
     {text: "My social life", correct: false}],
    },
    {question : "The getElementByID document method only works on the following",
     answers: [{text: "Classes", correct: false},
     {text: "A popular Eastern European contrast to St Nick", correct: false},
     {text: "Elements", correct: false},
     {text: "IDs", correct: true}]
    },
    {question : "What is the difference between null and undefined?",
     answers: [{text: "Null was banned by the Dollfuss regime of Austria", correct: false},
      {text: "Undefined is an unknown variable, Null is the absence of a variable but is treated as an object", correct: true},
      {text: "Null is a boolean, while undefined is a string", correct: false},
      {text: "Null is not an object", correct: false},]
  },
    {question: "The HTML DOM stands for",
     answers: [{text: "Dominant", correct: false},
     {text: "Demon On Merry-ol-Christmas", correct: false},
     {text: "Disk on Module", correct: false},
     {text: "Document Object Model", correct: true},]
  },
    {question: "What is a Web API",
     answers: [{text: "An application programming interface", correct: true},
     {text: "An application programmer illness", correct: false},
     {text: "An alternate program initializer", correct: false},
     {text: "A bag which Krampus carries the bad children off with", correct: false}]
  },
    {question: "What framework are APIs most commonly used for",
     answers: [{text: ".com", correct: false},
     {text: "the bundles of birch branches Krampus uses to flog people", correct: false},
     {text: ".edu", correct: false},
     {text: ".net", correct: true},]
},
    {question: "Local storage is most commonly and best suited for",
     answers: [{text: "Annual festivals where people dress as the anthropomorphic creature", correct: false},
     {text: "Secure personal data", correct: false},
     {text: "Carry on only", correct: false},
     {text: "Data which is considered unsecure", correct: true},]
},
    {question: "Anything stored in local storage is a... ",
     answers: [{text: "Preference", correct: false},
     {text: "Horned god of the witches", correct: false},
     {text: "String", correct: true},
     {text: "Variable", correct: false},]
},
    {question: "Common types of events include all except",
     answers: [{text: "click", correct: false},
     {text: "Receiving Grub vom Krampus greeting cards", correct: true},
     {text: "Key-up", correct: false},
     {text: "Key-down", correct: false},]
  },
    {question: "It is customary to...",
     answers: [{text: "Offer Krampus a brandy", correct: true},
     {text: "Wear costumes to Krampus celebrations", correct: true},
     {text: "Hit small children with birch sticks at festivals", correct: true},
     {text:"All of the above", correct: true},]
  },
]
