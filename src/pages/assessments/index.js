import React from 'react'
import { Link, Route } from 'react-router-dom'
import { modulesConfig } from '../modules-config'
import ModuleAssessment from './module-assessment'

const AssessmentsPage = () => {
  return (
    <main>
      <ul>
        {modulesConfig.map(module => {
          return (
            <li key={module.urlName}>
              <Link to={`/assessments/${module.urlName}`}>{module.name}</Link>
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
