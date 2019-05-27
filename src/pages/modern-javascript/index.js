import React from 'react'
import { Route } from 'react-router-dom'
import RenderSubPage from './render-sub-page'
import routeConfig from './route-config'

const ModernJSPage = ({ match }) => {
  const routeToRender = routeConfig.find(
    subRoute => subRoute.path === `/${match.params.page}`
  )

  return (
    <Route
      path={`${match.url}`}
      render={props => (
        <>
          <RenderSubPage
            {...props}
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
