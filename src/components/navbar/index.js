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
      <a
        className="nav-item nav-secondary"
        href="https://drive.google.com/drive/folders/1YW3KoU4HiSWgmLl8VTJr478NjeaV87-G"
        target="_blank"
        rel="noopener noreferrer"
      >
        Supplemental Videos
      </a>
    </nav>
  )
}

export default Navbar
