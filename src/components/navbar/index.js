import React, { useState } from 'react'
import ReactModal from 'react-modal'

import { Link } from 'react-router-dom'
import './navbar.scss'
import { FEDTrainingLogo } from './FED-Logo'

function Navbar({ user, handleSignOut }) {
  const [isModalOpen, setModal] = useState(false)
  const username = user && user.username

  const toggleModal = () => {
    setModal(!isModalOpen)
  }

  return (
    <nav className="navigation">
      <Link to="/" className="nav-primary nav-item training-logo">
        <FEDTrainingLogo />
      </Link>
      <div className="nav-secondary">
        {username && (
          <span
            className={'nav-item'}
            onClick={() => {
              toggleModal()
            }}
          >
            Welcome{`, ${username}`}
          </span>
        )}
      </div>
      <ReactModal isOpen={isModalOpen}>
        <span className={'nav-item'} onClick={handleSignOut}>
          Sign Out
        </span>
      </ReactModal>
    </nav>
  )
}

export default Navbar
