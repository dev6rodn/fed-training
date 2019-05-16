import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { fetchMarkdown } from '../../services/markdown'

const RenderSubPage = props => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetchMarkdown(props.markdown).then(markupText => setMarkdown(markupText))
  }, [props.markdown])

  return <ReactMarkdown source={markdown} escapeHtml={false} />
}

export default RenderSubPage
