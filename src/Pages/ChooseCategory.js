import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {categories} from "../Utils/categories"
import LogoHeader from '../logos/LogoHeader'

function ChooseCategory() {
    const location = useLocation()
    const name  = location.state

    const [category, setCategory] = useState(9)

    const navigate = useNavigate()

    const handleChooseCategory = (e) => {
        const option = e.target.innerText; 
        switch(option) {
            case 'General':
                setCategory(categories['general'])
                break
            case 'Computer Science':
                setCategory(categories['computer-science'])
                break
            case 'Books':
                setCategory(categories['books'])
                break
            case 'Films':
                setCategory(categories['films'])
                break
            case 'Music':
                setCategory(categories['music'])
                break
            default:
                return category
        }
        navigate('difficulty', { state: category})
    }

  return (
    <>
        <LogoHeader/>
        <div className="loadfirst">
            <h3>Hello, {name}!</h3>
            <p>What category would you like to improve on?</p>
        </div>
        <div>
            <button onClick={handleChooseCategory}>General
                {/* <Link to='difficulty' state={{ category: categories['general'] }}>General</Link> */}
            </button>
            <p/>
            <button onClick={handleChooseCategory}>Computer Science
                {/* <Link to='difficulty' state={{ category: categories['computer-science'] }}>Computer Science</Link> */}
            </button>
            <p/>
            <button onClick={handleChooseCategory}>Books
                {/* <Link to='difficulty' state={{ category: categories['books'] }}>Books</Link> */}
            </button>
            <p/>
            <button onClick={handleChooseCategory}>Films
                {/* <Link to='difficulty' state={{ category: categories['films'] }}>Films</Link> */}
            </button>
            <p/>
            <button onClick={handleChooseCategory}>Music
                {/* <Link to='difficulty' state={{ category: categories['music'] }}>Music</Link> */}
            </button>
        </div>
    </>
  )
}

export default ChooseCategory;