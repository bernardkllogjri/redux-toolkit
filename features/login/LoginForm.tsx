import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  // Form,
  // FormButtons,
  // Input,
  // Checkbox,
  // SingleSelect,
  // Error,
  // FontAwesome5,
  Link,
  Message,
  Input,
} from 'components'
import { dangerousHTML, t } from 'utils'
import { PASSWORD_RESET_URL, DEFAULT_LOCALE } from 'settings'

const LoginForm = props => {
  const {
    onSubmit,
    onLanguageChange,
    togglePasswordFieldType,
    passwordFieldType,
    emailWarningStatus,
    userTemporaryBlockedStatus,
    onResendVerificationClick,
    locale,
    hideLanguageSelector,
    // hideRememberMe,
    skipClear
  } = props

  console.warn({ PASSWORD_RESET_URL });
  

  return (
    <div className='ta-login-form'>
      <form onSubmit={onSubmit} name='login' skipClear={skipClear}>
        <Row>
          <Col>
            <Input
              name='email'
              dataTestid='email'
              label={t('login.fieldEmail.label')}
              placeholder={t('login.fieldEmail.placeholder')}
              mandatory
              hideError
            />
          </Col>
        </Row>
        <Row>
          <Col className='relative'>
            <Input
              name='password'
              dataTestid='password'
              label={t('global.password')}
              placeholder={t('global.password.placeholder')}
              mandatory
              hideError
            />
            <div className='ta-login__password-type-toggle-btn' onClick={togglePasswordFieldType}>
              {/* <FontAwesome5 icon={passwordFieldType === 'password' ? 'eye' : 'eye-slash'} /> */}
            </div>
          </Col>
        </Row>
        {/* {!hideLanguageSelector &&
          <Row>
            <Col>
              <SingleSelect name='language' onChangeAddon={onLanguageChange} />
            </Col>
          </Row>
        } */}
        <Message
          type={emailWarningStatus + ''}
          show={['warning', 'success'].includes(emailWarningStatus)}
        >
          {emailWarningStatus === 'warning' &&
            <>
              <p>{dangerousHTML(t('login.eMailVerification.note.text'))}</p>
              <Link className='ta-btn ta-btn-primary ta-login-email-resend-btn' onClick={onResendVerificationClick}>
                {dangerousHTML(t('login.eMailVerification.note.button'))}
              </Link>
            </>
          }
          {emailWarningStatus === 'success' && t('login.eMailVerification.note.successText')}
        </Message>
        <Message
          type={userTemporaryBlockedStatus + ''}
          show={userTemporaryBlockedStatus === 'warning'}
        >
          <p>{dangerousHTML(t('login.userTemporaryBlockedStatus.note.text'))}</p>
          <Link
            to={(PASSWORD_RESET_URL || '').replace(`/${DEFAULT_LOCALE}/`, `/${locale}/`)}
            className='ta-btn ta-btn-primary'
            target='_blank'
            external
          >{dangerousHTML(t('login.userTemporaryBlockedStatus.note.button'))}</Link>
        </Message>
        <Row>
          {/* {!hideRememberMe &&
            <Col size={50}>
              <Checkbox name='remember' label={t('login.checkboxRemember.label')} />
            </Col>
          } */}
          {PASSWORD_RESET_URL &&
            <Col size={50}>
              <Link
                to={(PASSWORD_RESET_URL || '').replace(`/${DEFAULT_LOCALE}/`, `/${locale}/`)}
                className='pull-right ta-login__link'
                target='_blank'
                external
              >{t('global.passwordForgotten')}</Link>
            </Col>
          }
        </Row>
        {/* <Error name='emailOrPassword' multiFields data-testid='emailOrPasswordError' /> */}
        {/* <FormButtons> */}
          <button
            type='submit'
            className='ta-btn ta-btn-primary ta-btn-block'
            disabled={emailWarningStatus === 'warning'}
            data-testid='loginButton'
          >
            {t('login.button')}
          </button>
          <Link to='/login-sso' className='ta-btn ta-btn-black-ghost ta-btn-block ta-login__sso-btn'>
            {t('login.ssoLogin.btn')}
          </Link>
        {/* </FormButtons> */}
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  locale: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  togglePasswordFieldType: PropTypes.func.isRequired,
  passwordFieldType: PropTypes.string.isRequired
}

export default LoginForm
