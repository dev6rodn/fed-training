import React from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import * as queries from '../../../graphql/queries'
import QuizItem from '../../../components/quiz'

const ModuleAssessment = ({ match }) => {
  const { moduleName } = match.params
  return (
    <main>
      <Connect
        query={graphqlOperation(queries.listModuleTests, {
          filter: { id: { eq: moduleName } },
        })}
      >
        {({ data: { listModuleTests }, loading, error }) => {
          if (error) return <h3>Error</h3>
          if (loading || !listModuleTests) return <h3>Loading...</h3>
          return <QuizItem moduleAssessmentData={listModuleTests.items[0]} />
        }}
      </Connect>
    </main>
  )
}

export default ModuleAssessment
