import React from 'react'
import Questions from './Questions'
import { useLocation } from 'react-router-dom'

function QuizPage() {
  const location = useLocation()
  const { difficulty } = location.state
  return (
    <div>
        <Questions difficulty={difficulty}/>
    </div>
  )
}

export default QuizPage