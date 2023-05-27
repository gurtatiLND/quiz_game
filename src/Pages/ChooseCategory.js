import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {categories} from "../Utils/categories"
import LogoHeader from '../logos/LogoHeader'

function ChooseCategory() {
    const location = useLocation()
    const name  = location.state

    const [category, setCategory] = useState(null)

    const navigate = useNavigate()

    const handleChooseCategory = (e) => {
      try {
          const option = e.target.innerText;
          switch (option) {
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
      } catch (error) {
          console.error("Error selecting category:", error)
      }
  }

  useEffect(() => {
      try {
          if (category !== null) {
              console.log(category);
              navigate('difficulty', { state: category });
          }
      } catch (error) {
          console.error("Error navigating to difficulty:", error)
      }
  }, [category, navigate]);

  return (
    <>
        <LogoHeader/>
        <div data-testid="whatCategory">
            <h3>Hello, {name}!</h3>
            <p>What category would you like to improve on?</p>
        </div>
        <button type="button" onClick={handleChooseCategory}>
          General
        </button>
        <p />
        <button type="button" onClick={handleChooseCategory}>
          Computer Science
        </button>
        <p />
        <button type="button" onClick={handleChooseCategory}>
          Books
        </button>
        <p />
        <button type="button" onClick={handleChooseCategory}>
          Films
        </button>
        <p />
        <button type="button" onClick={handleChooseCategory}>
          Music
        </button>
    </>
  )
}

export default ChooseCategory;