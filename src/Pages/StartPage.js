import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import homelogo from '../logos/full-logo.svg'
import "./Pages.css"

function StartPage() {

  const navigate = useNavigate()

  const [name, setName] = useState('Player')

  const handleStart = () => {
    navigate('category', { state: name})
  }

  console.log(name);

  return (
    <div>
      <header>
        <img src={homelogo} className="homelogo" alt="logo" width={500}/>
      </header>

      <p>Who is playing now?</p>
      <input 
        placeholder='Enter your name'
        onChange={event => setName(event.target.value)}
      ></input>
      <p/>
      <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default StartPage