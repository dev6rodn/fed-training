import React from 'react'

import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar({ user, handleSignOut }) {
  const username = user && user.username
  return (
    <nav className="navigation">
      <Link
        to="/"
        activeClassName="nav-active"
        className={'nav-primary nav-item'}
      >
        <span>Home</span>
      </Link>
      <div className="nav-secondary">
        <span className={'nav-item'} onClick={handleSignOut}>
          Sign Out
        </span>
        {username && (
          <span className={'nav-item'}>Welcome{`, ${username}`}</span>
        )}
      </div>
    </nav>
  )
}

export default Navbar
