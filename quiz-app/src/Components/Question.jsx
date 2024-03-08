import React, { useState } from "react"

import Pagination from "./Pagination"
const Question = ({ setScore, setShowScore }) => {
  const [question_No, setQuestion_No] = useState(0)

  const quizQuestions = [
    {
      // no:1,
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

  const nextPage = (selectedAnswer, index) => {
    console.log(index)
    if (selectedAnswer === quizQuestions[question_No].correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }
    if (question_No < quizQuestions.length - 1) {
      setQuestion_No((prevQuestion_No) => prevQuestion_No + 1)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div>
        <Pagination quizQuestions={quizQuestions} nextPage={nextPage} />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Question {question_No + 1}: {quizQuestions[question_No].question}
            </h5>
          </div>
          <ul className="list-group list-group-flush">
            <div className="p-2">
              {quizQuestions[question_No].options.map((option, index) => (
                <li className="list-group-item" key={index}>
                  <div className="d-grid ">
                    <button
                      value={option}
                      onClick={() => nextPage(option, index + 1)}
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

export default Question
