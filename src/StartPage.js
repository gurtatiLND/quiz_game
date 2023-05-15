import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"

function StartPage() {

  const [name, setName] = useState('Player')
  return (
    <div>
      <h3>Let's get quizzical!</h3>

      <p>Who is playing today?</p>
  
      <input 
        placeholder='Enter your name'
        onChange={event => setName(event.target.value)}
      ></input>

      {console.log(name)}

      <button>
        <Link to='quiz'>Start</Link>
      </button>


    </div>
  )
}

export default StartPage