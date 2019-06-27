import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { FEDTrainingLogo } from './FED-Logo'

function Navbar({ user, handleSignOut }) {
  const username = user && user.username
  const userGroups =
    user.signInUserSession.accessToken.payload['cognito:groups']

  return (
    <nav className="navigation">
      <Link to="/" className="nav-primary nav-item training-logo">
        <FEDTrainingLogo />
      </Link>
      <div className="nav-secondary">
        {username && (
          <span className={'nav-item'}>Welcome{`, ${username}`}</span>
        )}
        {userGroups.includes('Admin') && (
          <Link className="nav-item" to="/admin-portal">
            Admin Portal
          </Link>
        )}
        <span className={'nav-item'} onClick={handleSignOut}>
          Sign Out
        </span>
      </div>
    </nav>
  )
}

export default Navbar
