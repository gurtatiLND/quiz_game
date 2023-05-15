import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function QuizSetUpPage() {
    const location = useLocation()
    const { name } = location.state
  return (
    <div>
        <h3>Hello, {name}!</h3>
        <p>What category would you like to improve on?</p>
        <button>
            <Link to='difficulty'>Surprise</Link>
        </button>
    </div>
  )
}

export default QuizSetUpPage