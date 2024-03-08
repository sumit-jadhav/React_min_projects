import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
const ScoreCard = ({ score, setScore, setShowScore }) => {
  const resetQuiz = () => {
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card
        bg={"primary"}
        key={"primary"}
        text={"primary" === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2 "
      >
        <Card.Body>
          <Card.Title>Your Score :{score} </Card.Title>
          <Button onClick={() => resetQuiz()} variant="dark">
            Retake
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ScoreCard
