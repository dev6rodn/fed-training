import React from 'react'
import { Link } from 'react-router-dom'
import tableOfContentStyles from './table-of-content-styles.module.scss'
import { withRouter } from 'react-router-dom'

const TableOfContents = props => {
  const isActive = route => {
    const path = props.location.pathname.split('/')
    const formattedPath = '/' + path[path.length - 1]
    return route.path === formattedPath ? tableOfContentStyles.active : ''
  }
  const configList = props.routeConfig.map(route => {
    return (
      <Link
        to={`${props.prepend}${route.path}`}
        key={route.id}
        className={isActive(route)}
      >
        {route.displayName}
      </Link>
    )
  })

  return (
    <section className={tableOfContentStyles.container}>
      <h2>Table of Contents</h2>
      {configList}
    </section>
  )
}

export default withRouter(TableOfContents)
