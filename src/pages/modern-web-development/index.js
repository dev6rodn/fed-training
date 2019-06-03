import React from 'react'
import { Route } from 'react-router-dom'
import routeConfig from './route-config'
import PageContent from '../../components/page-content'

const ReactPage = ({ match }) => {
  const routeToRender = routeConfig.find(
    subRoute => subRoute.path === `/${match.params.page}`
  )

  return (
    <Route
      path={`${match.url}`}
      render={props => (
        <PageContent
          {...props}
          urlPrefix="/modern-web-development"
          markdown={routeToRender.markdown}
          codesandboxUrl={routeToRender.codesandboxUrl}
          next={routeToRender.next}
          previous={routeToRender.previous}
          routeConfig={routeConfig}
        />
      )}
    />
  )
}

export default ReactPage
