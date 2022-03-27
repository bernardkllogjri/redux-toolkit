const replaceTag = tag => {
  const tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
    // '"': '&quot;',
    // '\'': '&#x27;',
    // '/': '&#x2F;'
  }
  return tagsToReplace[tag] || tag
}

export default str => str.replace(/[&<>]/g, replaceTag)
