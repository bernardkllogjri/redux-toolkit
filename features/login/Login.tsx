import { BlueTemplate, Link, Loader } from 'components'
import MigrationOverlayWrapper from 'components/__common/MigrationOverlayWrapper'
import React, { Component } from 'react'
// import { Login } from '../../Beauties'
import { REGISTRATION_URL, DEFAULT_LOCALE, WEBSITE_URL } from 'settings'
import { t } from 'utils'
import styles from './Login.module.css'
import LoginForm from './LoginForm'

const locale = 'en-gb'

class LoginWrapper extends Component {
  // constructor (props, context) {
  //   super(props)

  //   this.onSubmit = this.onSubmit.bind(this)
  //   this.onLanguageChange = this.onLanguageChange.bind(this)
  // }

  // componentDidMount () {
  //   const { router } = this.props
  //   const { query } = router || {}
  //   let { locale } = query || {}
  //   locale = SUPPORTED_LOCALES.includes(locale) ? locale : null
  //   handlers.loginFormPopulate(locale)
  // }

  // onSubmit (cb) {
  //   const form = store.getState().forms.login
  //   handlers.loginWithEmailAndPassword(form, (errors) => {
  //     cb && cb(errors)
  //   })
  // }

  // onLanguageChange () {
  //   const { router } = this.props
  //   const { query } = router || {}
  //   const {
  //     redirect,
  //     companyId,
  //     externalCompanyId,
  //     accountId,
  //     externalAccountId,
  //     enterpriseSlug,
  //     enterpriseId,
  //     customerId,
  //     date,
  //     resource,
  //     externalCustomerId
  //   } = query || {}
  //   const form = store.getState().forms.login
  //   const params = [`locale=${form.language.value}`]
  //   if (redirect) params.push(`redirect=${encodeURIComponent(redirect)}`)
  //   if (companyId) params.push(`companyId=${companyId}`)
  //   if (date) params.push(`date=${date}`)
  //   if (resource) params.push(`resource=${resource}`)
  //   if (externalCompanyId) params.push(`externalCompanyId=${externalCompanyId}`)
  //   if (accountId) params.push(`accountId=${accountId}`)
  //   if (externalAccountId) params.push(`externalAccountId=${externalAccountId}`)
  //   if (enterpriseSlug) params.push(`enterpriseSlug=${enterpriseSlug}`)
  //   if (enterpriseId) params.push(`enterpriseId=${enterpriseId}`)
  //   if (customerId) params.push(`customerId=${customerId}`)
  //   if (externalCustomerId) params.push(`externalCustomerId=${externalCustomerId}`)
  //   handlers.navigateToPath(`/login?${params.join('&')}`)
  // }

  // onResendVerificationClick () {
  //   const form = store.getState().forms.login
  //   const email = form.email && form.email.value
  //   handlers.authEmailVerificationSend(email)
  // }

  // togglePasswordFieldType () {
  //   const form = store.getState().forms.login
  //   const password = {
  //     value: form.password.value,
  //     type: form.password.type === 'password' ? 'text' : 'password'
  //   }
  //   handlers.formFieldsUpdate('login', { password })

  //   return password.type
  // }

  render () {
    const {
      pending,
      pendingOneTimeToken,
      pendingLanguage,
      emailWarningStatus,
      userTemporaryBlockedStatus,
      passwordFieldType,
      router
    } = this.props

    return (
      <div className='ta-login'>
        <BlueTemplate logoUrl={WEBSITE_URL || '/'}>
          {!pendingLanguage &&
            <div className={styles.loginBox}>
              <div className={styles.loginBoxContent}>
                <div className={styles.loginTitle}>{t('login.greeting')}</div>
                <Loader active={pendingLanguage || pending} />
                <LoginForm />
                {/* <LoginForm
                  locale={locale}
                  // onSubmit={onSubmit}
                  passwordFieldType={passwordFieldType}
                  // togglePasswordFieldType={togglePasswordFieldType}
                  // onLanguageChange={onLanguageChange}
                  // onResendVerificationClick={onResendVerificationClick}
                  userTemporaryBlockedStatus={userTemporaryBlockedStatus}
                  emailWarningStatus={emailWarningStatus}
                  // skipClear={skipClear}
                /> */}
              </div>
              {REGISTRATION_URL &&
                <div className={styles.loginBoxFooter}>
                  <Link to={REGISTRATION_URL.replace(`/${DEFAULT_LOCALE}/`, `/${locale}/`)} target='_blank' external>
                    {t('login.newAccount')}
                  </Link>
                </div>
              }
            </div>
          }
          <MigrationOverlayWrapper />
        </BlueTemplate>
      </div>
    )
  }
}

// const maps = state => ({
//   router: selectors.routerSelector(state),
//   pendingLanguage: selectors.appFieldSelector(state, { field: 'pendingLanguage' }),
//   pending: state.auth.pendingForm,
//   pendingOneTimeToken: state.auth.pendingOneTimeToken,
//   emailWarningStatus: state.auth.emailWarningStatus,
//   userTemporaryBlockedStatus: state.auth.userTemporaryBlockedStatus,
//   passwordFieldType: selectors.formFieldPropertySelector(state, { formName: 'login', name: 'password', property: 'type' })
// })

export default LoginWrapper
