import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { FEDTrainingLogo } from './FED-Logo'

function Navbar({ user, handleSignOut }) {
  const username = user && user.username
  const userGroups =
    user.signInUserSession.accessToken.payload['cognito:groups']
  console.log(userGroups)
  return (
    <nav className="navigation">
      <Link to="/" className="nav-primary nav-item training-logo">
        <FEDTrainingLogo />
      </Link>
      <div className="nav-secondary">
        {username && (
          <span className={'nav-item'}>Welcome{`, ${username}`}</span>
        )}
        <Link className={'nav-item'} to="/assessments">
          Assessments
        </Link>
        {userGroups.length > 0 && userGroups.includes('Admin') && (
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

// mutation {
//   createModuleTest(input: {
//     module: "hello",
//     questions: [
//       {
//         text: "how old are you?",
//         score: 20,
//         resource: "somewhere on the web",
//         answers: [
//           {
//             text: "2",
//             isCorrect: false
//           },
//           {
//             text: "20",
//             isCorrect: false
//           },
//           {
//             text: "25",
//             isCorrect: false
//           },
//           {
//             text: "30",
//             isCorrect: true
//           }
//         ]
//       }
//     ]
//   }) {
//     id
//     questions {
//       text
//     }
//   }
// }
