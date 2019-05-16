import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { fetchMarkdown } from '../../services/markdown'

const RenderSubPage = props => {
  console.log(props)
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetchMarkdown(props.markdown).then(markupText => setMarkdown(markupText))
  }, [props.markdown])

  return (
    <section style={{ height: '100vh' }}>
      {props.codesandboxUrl && (
        <iframe
          title="composition"
          src={`${props.codesandboxUrl}`}
          frameborder="0"
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
      </section>
    </section>
  )
}

export default RenderSubPage
