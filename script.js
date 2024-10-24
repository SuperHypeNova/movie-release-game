const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const checkGuessButton = document.getElementById('check-guess-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const posterElement = document.getElementById('movie-poster')
const scoreDisplay = document.getElementById('current-score')
const totalQuestionsDisplay = document.getElementById('total-questions')
const currentQuestionDisplay = document.getElementById('current-question')
const feedbackElement = document.getElementById('feedback')

let userAnswer
let releaseDate
let currentScore = 0
let questionsAnswered = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  currentScore = 0
  questionsAnswered = 0
  questionContainerElement.classList.remove('hide')
  updateScoreDisplay()
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  posterElement.src = question.poster
  posterElement.classList.add('movie-poster')
  questionElement.innerText = question.question
  releaseDate = question.answer
  checkGuessButton.addEventListener('click', checkGuess)
  
  questionsAnswered++
  updateScoreDisplay()
}

function resetState() {
  nextButton.classList.add('hide')
  feedbackElement.classList.add('hide')
  feedbackElement.className = 'feedback hide'
  document.getElementById('user-answer').value = ''
}

function checkGuess() {
  userAnswer = document.getElementById('user-answer').value
  const correctYear = parseInt(releaseDate)
  const guessedYear = parseInt(userAnswer)
  
  if (guessedYear === correctYear) {
    currentScore += 2
    showFeedback('Correct! You got 2 points!', 'correct')
  } else if (Math.abs(guessedYear - correctYear) === 1) {
    currentScore += 1
    showFeedback(`Close! The correct year was ${releaseDate}. You got 1 point!`, 'partial')
  } else {
    showFeedback(`Incorrect. The movie was released in ${releaseDate}.`, 'incorrect')
  }
  
  updateScoreDisplay()
  document.getElementById('user-answer').value = ''
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    showFinalScore()
  }
}

function showFeedback(message, type) {
  feedbackElement.textContent = message
  feedbackElement.className = `feedback ${type}`
  feedbackElement.classList.remove('hide')
}

function showFinalScore() {
  startButton.innerText = 'Play Again'
  startButton.classList.remove('hide')
  showFeedback(`Game Over! Final Score: ${currentScore} out of ${shuffledQuestions.length * 2} possible points`, 'correct')
}

function updateScoreDisplay() {
  scoreDisplay.textContent = currentScore
  totalQuestionsDisplay.textContent = shuffledQuestions ? shuffledQuestions.length : 0
  currentQuestionDisplay.textContent = questionsAnswered
}

const questions = [
  {
    question: 'What year was The Shawshank Redemption released?',
    answer: '1994',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    question: 'What year was The Godfather released?',
    answer: '1972',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR1,0,182,268_AL_.jpg'
  },
  {
    question: 'What year was The Dark Knight released?',
    answer: '2008',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Godfather: Part II released?',
    answer: '1974',
    poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR1,0,182,268_AL_.jpg'
  }, {
    question: 'What year was 12 Angry Men released?',
    answer: '1957',
    poster: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Schindler\'s List released?',
    answer : '1993',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Lord of the Rings: The Return of the King released?',
    answer: '2003',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Pulp Fiction released?',
    answer: '1994',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Lord of the Rings: The Fellowship of the Ring released?',
    answer: '2001',
    poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Good, the Bad and the Ugly released?',
    answer: '1966',
    poster: 'https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Forrest Gump released?',
    answer: '1994',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Fight Club released?',
    answer: '1999',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Inception released?',
    answer: '2010',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Lord of the Rings: The Two Towers released?',
    answer: '2002',
    poster: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Star Wars: Episode V - The Empire Strikes Back released?',
    answer: '1980',
    poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Matrix released?',
    answer: '1999',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Goodfellas released?',
    answer: '1990',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was One Flew Over the Cuckoo\'s Nest released?',
    answer : '1975',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Se7en released?',
    answer: '1995',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Seven Samurai released?',
    answer: '1954',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UX182_CR1,0,182,268_AL_.jpg'
  }, {
    question: 'What year was It\'s a Wonderful Life released?',
    answer : '1946',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Silence of the Lambs released?',
    answer: '1991',
    poster: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was City of God released?',
    answer: '2002',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Saving Private Ryan released?',
    answer: '1998',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Life Is Beautiful released?',
    answer: '1997',
    poster: 'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Green Mile released?',
    answer: '1999',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Interstellar released?',
    answer: '2014',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Star Wars released?',
    answer: '1977',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Terminator 2: Judgment Day released?',
    answer: '1991',
    poster: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Back to the Future released?',
    answer: '1985',
    poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Spirited Away released?',
    answer: '2001',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Psycho released?',
    answer: '1960',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Pianist released?',
    answer: '2002',
    poster: 'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR2,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Léon: The Professional released?',
    answer: '1994',
    poster: 'https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Parasite released?',
    answer: '2019',
    poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Lion King released?',
    answer: '1994',
    poster: 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Gladiator released?',
    answer: '2000',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was American History X released?',
    answer: '1998',
    poster: 'https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Usual Suspects released?',
    answer: '1995',
    poster: 'https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Departed released?',
    answer: '2006',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Prestige released?',
    answer: '2006',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Casablanca released?',
    answer: '1942',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Whiplash released?',
    answer: '2014',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Intouchables released?',
    answer: '2011',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Top Gun: Maverick released?',
    answer: '2022',
    poster: 'https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Modern Times released?',
    answer: '1936',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Hara-Kiri released?',
    answer: '1962',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UX182_CR2,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Once Upon a Time in the West released?',
    answer: '1968',
    poster: 'https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Grave of the Fireflies released?',
    answer: '1988',
    poster: 'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Rear Window released?',
    answer: '1954',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Alien released?',
    answer: '1979',
    poster: 'https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was City Lights released?',
    answer: '1931',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Cinema Paradiso released?',
    answer: '1988',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Memento released?',
    answer: '2000',
    poster: 'https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Apocalypse Now released?',
    answer: '1979',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Indiana Jones and the Raiders of the Lost Ark released?',
    answer: '1981',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Django Unchained released?',
    answer: '2012',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was WALL·E released?',
    answer: '2008',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Lives of Others released?',
    answer: '2006',
    poster: 'https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Sunset Blvd. released?',
    answer: '1950',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Paths of Glory released?',
    answer: '1957',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Shining released?',
    answer: '1980',
    poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Great Dictator released?',
    answer: '1940',
    poster: 'https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Witness for the Prosecution released?',
    answer: '1957',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Avengers: Infinity War released?',
    answer: '2018',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Aliens released?',
    answer: '1986',
    poster: 'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was American Beauty released?',
    answer: '1999',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb released?',
    answer: '1964',
    poster: 'https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Dark Knight Rises released?',
    answer: '2012',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Spider-Man: Into the Spider-Verse released?',
    answer: '2018',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Joker released?',
    answer: '2019',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Oldboy released?',
    answer: '2003',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Braveheart released?',
    answer: '1995',
    poster: 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Amadeus released?',
    answer: '1984',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Toy Story released?',
    answer: '1995',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Coco released?',
    answer: '2017',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UX182_CR1,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Boat released?',
    answer: '1981',
    poster: 'https://m.media-amazon.com/images/M/MV5BOGZhZDIzNWMtNjkxMS00MDQ1LThkMTYtZWQzYWU3MWMxMGU5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Inglourious Basterds released?',
    answer: '2009',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Princess Mononoke released?',
    answer: '1997',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Once Upon a Time in America released?',
    answer: '1984',
    poster: 'https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Avengers: Endgame released?',
    answer: '2019',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Good Will Hunting released?',
    answer: '1997',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Requiem for a Dream released?',
    answer: '2000',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Toy Story 3 released?',
    answer: '2010',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UX182_CR1,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Singin\' in the Rain released?',
    answer: '1952',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Your Name. released?',
    answer: '2016',
    poster: 'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was 3 Idiots released?',
    answer: '2009',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR1,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Star Wars: Episode VI - Return of the Jedi released?',
    answer: '1983',
    poster: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was 2001: A Space Odyssey released?',
    answer: '1968',
    poster: 'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Reservoir Dogs released?',
    answer: '1992',
    poster: 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Eternal Sunshine of the Spotless Mind released?',
    answer: '2004',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was High and Low released?',
    answer: '1963',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Citizen Kane released?',
    answer: '1941',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Capernaum released?',
    answer: '2018',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UX182_CR1,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Lawrence of Arabia released?',
    answer: '1962',
    poster: 'https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was The Hunt released?',
    answer: '2012',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_UX182_CR1,0,182,268_AL_.jpg'
  }, {
    question: 'What year was M released?',
    answer: '1931',
    poster: 'https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was North by Northwest released?',
    answer: '1959',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Vertigo released?',
    answer: '1958',
    poster: 'https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    question: 'What year was Amélie released?',
    answer: '2001',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }
]
