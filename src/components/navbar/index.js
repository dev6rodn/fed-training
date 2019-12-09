import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { FEDTrainingLogo } from './FED-Logo'

function Navbar() {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-primary nav-item training-logo">
        <FEDTrainingLogo />
      </Link>
    </nav>
  )
}

export default Navbar
