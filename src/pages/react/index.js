import React from 'react'
import { Route } from 'react-router-dom'
import RenderSubPage from './render-sub-page'
import routeConfig from './route-config'
const ReactPage = ({ match }) => {
  const routeToRender = routeConfig.find(
    subRoute => subRoute.path === `/${match.params.page}`
  )

  return (
    <Route
      path={`${match.url}`}
      render={props => (
        <RenderSubPage {...props} markdown={routeToRender.markdown} />
      )}
    />
  )
}

export default ReactPage
