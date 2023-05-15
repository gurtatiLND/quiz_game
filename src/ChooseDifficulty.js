import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function ChooseDifficulty() {
    const location = useLocation()
    const {category} = location.state
  return (
    <div>
        <h3>Choose Difficulty</h3>
        <div>
            <button>
                <Link to='quiz' state={{ difficulty: 'easy', category: category }}>Easy</Link>
            </button>
            <button>
                <Link to='quiz' state={{ difficulty: 'medium', category: category }}>Medium</Link>
            </button>
            <button>
                <Link to='quiz' state={{ difficulty: 'hard', category: category }}>Advanced</Link>
            </button>             
               
        </div>
    </div>
  )
}

export default ChooseDifficulty