import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import homelogo from '../logos/full-logo.svg';
import "./Pages.css";

function StartPage() {

  const [name, setName] = useState('Player')
  console.log(name);
  return (
    <div>
      <header>
        <img src={homelogo} className="homelogo" alt="logo" width={500}/>
      </header>

      <p>Who is playing today?</p>
      <input 
        placeholder='Enter your name'
        onChange={event => setName(event.target.value)}
      ></input>
      <p/>
      <button>
        <Link to='category' state={{ name: name }}>Start</Link>
      </button>


    </div>
  )
}

export default StartPage