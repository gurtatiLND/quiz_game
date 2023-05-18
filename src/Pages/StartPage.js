import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import "./StartPage.css";

function StartPage() {

  const [name, setName] = useState('Player')
  console.log(name);
  return (
    <div>
      <h3>Let's get quizzical!</h3>

      <p>Who is playing today?</p>
  
      <input 
        placeholder='Enter your name'
        onChange={event => setName(event.target.value)}
      ></input>

      <button>
        <Link to='category' state={{ name: name }}>Start</Link>
      </button>


    </div>
  )
}

export default StartPage