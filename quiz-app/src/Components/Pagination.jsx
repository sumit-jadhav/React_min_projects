import React from "react"

const Pagination = ({ quizQuestions, nextPage }) => {
  const array = quizQuestions.length
  const handleClick = (i) => {
    // console.log(i)
    nextPage()
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {quizQuestions.map((quiz, index) => (
            <li key={index} className="page-item">
              <button
                onClick={() => handleClick(index + 1)}
                className="page-link"
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
