import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { fetchMarkdown } from '../../services/markdown'
import { Link } from 'react-router-dom'
import TableOfContents from '../../components/table-of-contents'

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

  const previousAndNextLinks = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to={previousPage}>Previous</Link>
      <Link to={nextPage}>Next</Link>
    </div>
  )

  return (
    <section style={{ height: '100vh' }}>
      {props.codesandboxUrl && (
        <iframe
          title="composition"
          src={`${props.codesandboxUrl}`}
          frameBorder="0"
          style={{
            width: '100%',
            height: '60%',
            border: '0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        />
      )}
      <section style={{ display: 'flex' }}>
        <TableOfContents
          prepend={`${props.urlPrefix}`}
          routeConfig={props.routeConfig}
        />
        <section
          className="rendered-markdown"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '1.3rem',
            lineHeight: '2rem',
            padding: '15px',
            maxWidth: '950px',
            margin: '0 auto',
          }}
        >
          {previousAndNextLinks()}
          <ReactMarkdown source={markdown} escapeHtml={false} />
          {previousAndNextLinks()}
        </section>
      </section>
    </section>
  )
}

export default PageContent
