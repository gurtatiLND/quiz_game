import React from 'react'
import { Link } from 'react-router-dom'

function ChooseDifficulty() {
  return (
    <div>
        <h3>Choose Difficulty</h3>
        <div>
            <button>
                <Link to='quiz' state={{ difficulty: 'easy' }}>Easy</Link>
            </button>
            <button>
                <Link to='quiz' state={{ difficulty: 'medium' }}>Medium</Link>
            </button>
            <button>
                <Link to='quiz' state={{ difficulty: 'advanced' }}>Avanced</Link>
            </button>             
               
        </div>
    </div>
  )
}

export default ChooseDifficulty