import React from 'react'
import Questions from '../Components/Questions'
import { useLocation } from 'react-router-dom'
import LogoHeader from '../logos/LogoHeader'

function QuizPage() {
  const location = useLocation()
  const { difficulty, category } = location.state

  return (
  <>
    <LogoHeader/>
    <div>
      <Questions difficulty={difficulty} category={category}/>
    </div>
  </>
  )
}

export default QuizPage