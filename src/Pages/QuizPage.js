import React from 'react'
import Questions from '../Components/Questions'
import { useLocation } from 'react-router-dom'

function QuizPage() {
  const location = useLocation()
  const { difficulty, category } = location.state

  return (
    <div>
        <Questions difficulty={difficulty} category={category}/>
    </div>
  )
}

export default QuizPage