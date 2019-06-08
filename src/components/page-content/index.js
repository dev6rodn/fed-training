import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { fetchMarkdown } from '../../services/markdown'
import { Link } from 'react-router-dom'
import TableOfContents from '../../components/table-of-contents'
import PageContentStyles from './page-content.module.scss'
import { ArrowIcon } from './arrow-icon'

const PageContent = props => {
  const nextPage = props.next ? `${props.urlPrefix}${props.next}` : '/'
  const previousPage = props.previous
    ? `${props.urlPrefix}${props.previous}`
    : '/'
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.markdown])

  useEffect(() => {
    fetchMarkdown(props.markdown).then(markupText => setMarkdown(markupText))
  }, [props.markdown])

  const previousAndNextLinks = (topNavigation = true) => (
    <div
      className={
        topNavigation
          ? PageContentStyles.navigationTop
          : PageContentStyles.navigationBottom
      }
    >
      <Link to={previousPage} className={PageContentStyles.navigationLink}>
        <ArrowIcon direction="back" styles={PageContentStyles} />
        Previous
      </Link>
      <Link to={nextPage} className={PageContentStyles.navigationLink}>
        Next
        <ArrowIcon direction="foreward" styles={PageContentStyles} />
      </Link>
    </div>
  )

  return (
    <section className={PageContentStyles.container}>
      {props.codesandboxUrl && (
        <iframe
          title="composition"
          src={`${props.codesandboxUrl}`}
          frameBorder="0"
          className={PageContentStyles.codeSandbox}
        />
      )}
      <section className={PageContentStyles.content}>
        <TableOfContents
          prepend={`${props.urlPrefix}`}
          routeConfig={props.routeConfig}
        />
        <section className={PageContentStyles.renderedMarkdown}>
          {previousAndNextLinks()}
          <ReactMarkdown source={markdown} escapeHtml={false} />
          {previousAndNextLinks(false)}
        </section>
      </section>
    </section>
  )
}

export default PageContent
