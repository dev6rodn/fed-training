import React from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import * as queries from '../../../graphql/queries'
import QuizItem from '../../../components/quiz'

const ModuleAssessment = ({ match }) => {
  return (
    <div>
      assessment time for {match.params.assessmentName}
      <Connect
        query={graphqlOperation(queries.getModuleTest, {
          id: '9e4f1602-e8bc-4e10-97e5-1508e7bc2060',
        })}
      >
        {({ data, loading, error }) => {
          console.log(data)
          {
            /* console.log('the module tests', listModuleTests)
          if (error) return <h3>Error</h3>
          if (loading || !listModuleTests) return <h3>Loading...</h3>
          return <QuizItem data={listModuleTests.items} /> */
          }
        }}
      </Connect>
    </div>
  )
}

export default ModuleAssessment
