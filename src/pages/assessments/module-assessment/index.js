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
          return listModuleTests.items.length > 0 ? (
            <QuizItem
              questions={listModuleTests.items[0].questions}
              moduleName={moduleName}
              totalPointsAllowed={listModuleTests.items[0].totalPointsAllowed}
            />
          ) : (
            <section>Pending module assessment, come back later :) </section>
          )
        }}
      </Connect>
    </main>
  )
}

export default ModuleAssessment
