import React from 'react'
import { Route } from 'react-router-dom'
import routeConfig from './route-config'
import PageContent from '../../components/page-content'

const ModernJSPage = ({ match }) => {
  const routeToRender = routeConfig.find(
    subRoute => subRoute.path === `/${match.params.page}`
  )

  return (
    <Route
      path={`${match.url}`}
      render={props => (
        <>
          <PageContent
            {...props}
            urlPrefix="/modern-javascript"
            markdown={routeToRender.markdown}
            codesandboxUrl={routeToRender.codesandboxUrl}
            previous={routeToRender.previous}
            next={routeToRender.next}
            routeConfig={routeConfig}
          />
        </>
      )}
    />
  )
}

export default ModernJSPage
