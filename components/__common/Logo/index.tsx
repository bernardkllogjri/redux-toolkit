import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
import Image from '../Image'

import styles from './Logo.module.css'

const Logo = props => {
  const { to } = props
  const logoUrl = to || '/'

  return (
    <Link to={logoUrl} className={styles.logo}>
      <Image src='/images/logo-timify.svg' alt='TIMIFY' />
    </Link>
  )
}

Logo.propTypes = {
  to: PropTypes.string
}

export default Logo
