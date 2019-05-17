import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { fetchMarkdown } from '../../services/markdown'
import { Link } from 'react-router-dom'

const RenderSubPage = props => {
  const nextPage = props.next ? `/react${props.next}` : '/'
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

      <section
        className="rendered-markdown"
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '1.3rem',
          lineHeight: '2rem',
          padding: '15px',
          maxWidth: '850px',
          margin: '0 auto',
        }}
      >
        <ReactMarkdown source={markdown} escapeHtml={false} />
        <div style={{ textAlign: 'right' }}>
          <Link to={nextPage}>Next</Link>
        </div>
      </section>
    </section>
  )
}

export default RenderSubPage
