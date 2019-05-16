import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/home'
import ReactTrainingLayout from './pages/react'
import JavaScriptTrainingLayout from './pages/modern-javascript'
import WebDevTrainingLayout from './pages/modern-web-development'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/react/:page" component={ReactTrainingLayout} />
      <Route
        exact
        path="/modern-javascript/:page"
        component={JavaScriptTrainingLayout}
      />
      <Route
        exact
        path="/modern-web-development/:page"
        component={WebDevTrainingLayout}
      />
    </Router>
  )
}

export default App
