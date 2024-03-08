import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import ScoreCard from "./Components/ScoreCard"
import Question from "./Components/Question"

function App() {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  return (
    <div className="container">
      {showScore ? (
        <ScoreCard
          score={score}
          setShowScore={setShowScore}
          setScore={setScore}
        />
      ) : (
        <Question setScore={setScore} setShowScore={setShowScore} />
      )}
    </div>
  )
}

export default App
