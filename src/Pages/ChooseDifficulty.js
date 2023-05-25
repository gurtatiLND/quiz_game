import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LogoHeader from '../logos/LogoHeader'

function ChooseDifficulty() {
    const location = useLocation()
    const category = location.state
    const navigate = useNavigate()
    const [difficulty, setDifficulty] = useState('easy')


    const handleChooseDifficulty = (e) => {
        const option = e.target.innerText
        switch (option) {
            case 'Easy':
                setDifficulty('easy')
                break
            case 'Medium':
                setDifficulty('medium')
                break
            case 'Advanced':
                setDifficulty('hard')
                break
            default:
                return difficulty
        }
        navigate('quiz', {state: {category: category, difficulty: difficulty}})
    }
  return (
    <>
    <LogoHeader/>
    <div>

        <h3>Choose Difficulty</h3>
        <div>
            <button onClick={handleChooseDifficulty}>Easy
                {/* <Link to='quiz' state={{ difficulty: 'easy', category: category }}>Easy</Link> */}
            </button>
            <p/>
            <button onClick={handleChooseDifficulty}>Medium
                {/* <Link to='quiz' state={{ difficulty: 'medium', category: category }}>Medium</Link> */}
            </button>
            <p/>
            <button onClick={handleChooseDifficulty}>Advanced
                {/* <Link to='quiz' state={{ difficulty: 'hard', category: category }}>Advanced</Link> */}
            </button>             
               
        </div>
    </div>
    </>
  )
}

export default ChooseDifficulty