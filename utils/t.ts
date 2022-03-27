// import { translations, store } from '../../Store'
const translations = {}
const t = (key, replace = [], locale = 'en-gb') => {
  if (!key) return 'Missing key!'
  if (!locale) return 'Something is wrong!'
  if (!translations[locale]) return 'Something is wrong!'
  let translation = null
  // const { router, phrase } = store.getState()
  // ===============================================
  // // TODO: @yanko REMOVE THIS TEMPORARY CODE
  // const { query } = router || {}
  // if (query.showTranslationKeys) {
  //   console.warn('---------TRANSLATION-KEY:', key)
  // }
  // const { isEnabled } = phrase || {}
  // const isStaging = ['development', 'staging'].includes(process.env.REACT_APP_ENV)

  // let translation = isStaging && isEnabled
  //   ? `{{__phrase_${key}__}}`
  //   // REMOVE ONLY THE IF STATEMANT
  //   // ORIGINAL CODE let translation = translations[locale][key]
  //   : query.showTranslationKeys ? key : translations[locale][key]
  // // ===============================================

  if (!translation) {
    const VERBOSE_QUERIES = !!['development', 'staging'].includes(process.env.REACT_APP_ENV)
    VERBOSE_QUERIES && console.log('%c =========== Missing translations >>', 'color:red;font-size:12px', key)
    return `Missing translations: ${key}`
  }

  if (replace.length) {
    replace.forEach(replaces => {
      if (replaces instanceof Array) {
        replaces.forEach(r => {
          if (r && r.key) {
            let replaceValue = r.value || ''
            if (r.translateReplace && r.translateReplace === true) {
              replaceValue = t(r.value)
            }
            replaceValue = (replaceValue || '').toString()
            translation = translation.replace(new RegExp(`%${replaces.key}%`, 'g'), replaceValue)
          }
        })
      } else {
        if (replaces && replaces.key) {
          let replaceValue = replaces.value || ''
          if (replaces.translateReplace && replaces.translateReplace === true) {
            replaceValue = t(replaces.value)
          }
          replaceValue = (replaceValue || '').toString()
          translation = translation.replace(new RegExp(`%${replaces.key}%`, 'g'), replaceValue)
        }
      }
    })
  }

  return translation
}

export default t