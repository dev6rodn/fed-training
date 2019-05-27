import React from 'react'
import { Link } from 'react-router-dom'
import tableOfContentStyles from './table-of-content-styles.module.scss'

const TableOfContents = ({ prepend, routeConfig }) => {
  const configList = routeConfig.map(route => {
    return (
      <Link to={`${prepend}${route.path}`} key={route.id}>
        {route.displayName}
      </Link>
    )
  })
  return (
    <section className={tableOfContentStyles.container}>
      <h4>Table of Contents</h4>
      {configList}
    </section>
  )
}

export default TableOfContents
