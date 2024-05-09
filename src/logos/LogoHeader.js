import React from "react"
import { Link } from "react-router-dom"
import quizzicallogo from './logo_for_pages.png'
import "./LogoHeader.css"

const LogoHeader = () => {
  return (
    <div>
      <header>
        <button className="logobutton">
            <Link to='/'><img src={quizzicallogo} alt="logo" width={150}/></Link>
        </button>
      </header>
    </div>
  )
};

export default LogoHeader;
