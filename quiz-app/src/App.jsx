import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the tallest mammal?",
      options: ["Elephant", "Giraffe", "Whale", "Hippopotamus"],
      correctAnswer: "Giraffe",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O",
    },
  ]
  const [question_No, setQuestion_No] = useState(0)
  const [score, setScore] = useState(0)

  const questions = quizQuestions.map(({ question }) => ({ question }))

  const nextPage = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[question_No].correctAnswer) {
      setScore(score + 1)
    }
    if (question_No < quizQuestions.length - 1) {
      setQuestion_No(question_No + 1)
    } else {
      alert(`Quiz ended! Your score: ${score}/${quizQuestions.length}`)
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Question :{quizQuestions[question_No].question}
            </h5>
          </div>
          <ul className="list-group list-group-flush">
            <div className="p-2">
              {quizQuestions[question_No].options.map((option) => (
                <li className="list-group-item" key={option}>
                  <div className="d-grid ">
                    <button
                      value={option}
                      onClick={() => nextPage(option)}
                      className="btn btn-primary"
                      type="button"
                    >
                      {option}
                    </button>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App