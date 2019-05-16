import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/home'
import ReactPage from './pages/react'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/react/:page" component={ReactPage} />
      {/* <Route exact path="/modern-javascript/:page" component={HomePage} />
      <Route exact path="/modern-web/:page" component={HomePage} /> */}
    </Router>
  )
}

export default App
