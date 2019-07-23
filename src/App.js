import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Amplify, { Auth, Hub } from 'aws-amplify'
import { Authenticator, AmplifyTheme } from 'aws-amplify-react'
import { SignUp } from 'aws-amplify-react/dist/Auth'
import HomePage from './pages/home'
import ReactTrainingLayout from './pages/react'
import JavaScriptTrainingLayout from './pages/modern-javascript'
import WebDevTrainingLayout from './pages/modern-web-development'
import ReduxTrainingLayout from './pages/redux'
import AdminPortalPage from './pages/admin-portal'
import Navbar from './components/navbar'
import AssessmentsPage from './pages/assessments'

import config from './aws-exports'

Amplify.configure(config)

function App() {
  const [user, updateUser] = useState(null)

  const fetchCurrentUser = async () => {
    return await Auth.currentAuthenticatedUser()
  }
  useEffect(() => {
    fetchCurrentUser().then(currentuser => {
      if (currentuser) {
        updateUser(currentuser)
      }
    })
  }, [])

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          updateUser(data)
          break
        case 'signOut':
          updateUser(null)
          break
        default:
          return
      }
    })
  }, [])

  const handleSignOut = async () => {
    try {
      await Auth.signOut()
    } catch (err) {
      console.error('Error signing out user', err)
    }
  }

  return !user ? (
    <Authenticator theme={theme} hide={[SignUp]} />
  ) : (
    <Router>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Route exact path="/" component={HomePage} />
      <Route path="/react/:page" component={ReactTrainingLayout} />
      <Route
        path="/modern-javascript/:page"
        component={JavaScriptTrainingLayout}
      />
      <Route
        path="/modern-web-development/:page"
        component={WebDevTrainingLayout}
      />
      <Route path="/redux/:page" component={ReduxTrainingLayout} />
      <Route path="/assessments" component={AssessmentsPage} />
      <Route path="/admin-portal" component={AdminPortalPage} />
    </Router>
  )
}

// used to override the hosted UI when logging in
const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: '#ffc0cb',
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'var(--amazonOrange)',
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: '5px',
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: 'var(--squidInk)',
  },
  sectionFooterPrimaryContent: {
    ...AmplifyTheme.sectionFooterPrimaryContent,
    margin: '0 auto',
  },
}
export default App
