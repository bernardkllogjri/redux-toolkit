import React from 'react'
import DOMPurify from 'dompurify'
import encodeHTML from './encodeHTML'

export default (text, doHtmlEncoding = false, skipSanitization = false) => {
  if (!text) return null
  // text = skipSanitization ? text : DOMPurify.sanitize(text)
  if (doHtmlEncoding) text = encodeHTML(text)
  return <span dangerouslySetInnerHTML={{ __html: text }} />
}
