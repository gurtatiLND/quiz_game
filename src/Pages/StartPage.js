import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

//styles
import "./Pages.css"
import homelogo from '../logos/full-logo.svg'

export default function StartPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('Player')

  const handleStart = () => {
    try {
      navigate('category', { state: name })
    } catch (error) {
      console.error("Error navigating to category:", error)
    }
  }

  return (
    <div className='start_page'>
      <div className='homelogo'>
        <img src={homelogo} alt="logo" width={500}/>
      </div>
    
      <div className='start_game'>
        <p>Who is playing now?</p>
        <input 
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}>
        </input>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  )
}