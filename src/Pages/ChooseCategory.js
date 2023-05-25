import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {categories} from "../Utils/categories"
import LogoHeader from '../logos/LogoHeader'

function ChooseCategory() {
    const location = useLocation()
    const name  = location.state

  return (
    <>
        <LogoHeader/>
        <div className="loadfirst">
            <h3>Hello, {name}!</h3>
            <p>What category would you like to improve on?</p>
        </div>
        <div>
            <button>
                <Link to='difficulty' state={{ category: categories['general'] }}>General</Link>
            </button>
            <p/>
            <button>
                <Link to='difficulty' state={{ category: categories['computer-science'] }}>Computer Science</Link>
            </button>
            <p/>
            <button>
                <Link to='difficulty' state={{ category: categories['books'] }}>Books</Link>
            </button>
            <p/>
            <button>
                <Link to='difficulty' state={{ category: categories['films'] }}>Films</Link>
            </button>
            <p/>
            <button>
                <Link to='difficulty' state={{ category: categories['music'] }}>Music</Link>
            </button>
        </div>
    </>
  )
}

export default ChooseCategory;