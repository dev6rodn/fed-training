import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { fetchMarkdown } from '../../services/markdown'
import { Link } from 'react-router-dom'
import TableOfContents from '../../components/table-of-contents'

const RenderSubPage = props => {
  const nextPage = props.next ? `/modern-javascript${props.next}` : '/'
  const previousPage = props.previous
    ? `/modern-javascript${props.previous}`
    : '/'
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.markdown])

  useEffect(() => {
    fetchMarkdown(props.markdown).then(markupText => setMarkdown(markupText))
  }, [props.markdown])

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
          prepend="/modern-javascript"
          routeConfig={props.routeConfig}
        />
        <section
          className="rendered-markdown"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '1.3rem',
            lineHeight: '2rem',
            padding: '15px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to={previousPage}>Previous</Link>
            <Link to={nextPage}>Next</Link>
          </div>
          <ReactMarkdown
            source={markdown}
            escapeHtml={false}
            transformImageUri={uri => {
              console.log(uri)
              return './images/react-lifecycle.jpeg'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to={previousPage}>Previous</Link>
            <Link to={nextPage}>Next</Link>
          </div>
        </section>
      </section>
    </section>
  )
}

export default RenderSubPage
