import React from 'react'
import { Link, Route } from 'react-router-dom'
import { cardsConfig } from '../home/cards-config'
import ModuleAssessment from './module-assessment'

const AssessmentsPage = () => {
  return (
    <main>
      <ul>
        {cardsConfig.map(card => {
          return (
            <li key={card.urlName}>
              <Link to={`/assessments/${card.urlName}`}>{card.name}</Link>
            </li>
          )
        })}
      </ul>
      <Route
        path={`/assessments/:assessmentName`}
        component={ModuleAssessment}
      />
    </main>
  )
}

export default AssessmentsPage
