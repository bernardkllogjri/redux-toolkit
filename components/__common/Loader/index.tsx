import React from 'react'
import PropTypes from 'prop-types'
// import { Image, t } from '../../Common'
// import { loaderGIF } from '../../Assets'

import styles from './Loader.module.css'
import Image from '../Image'
import { t } from 'utils'

const Loader = props => {
  const {
    active,
    hideBackground,
    style
  } = props
  const classNames = [styles.loader]
  if (active) classNames.push(styles.active)
  if (hideBackground) classNames.push(styles.noBackground)

  return (
    <div className={classNames.join(' ')} style={style} data-testid='loader'>
      <Image src='/images/ta-loader.gif' alt={t('global.loading')} />
    </div>
  )
}

Loader.propTypes = {
  active: PropTypes.bool,
  hideBackground: PropTypes.bool,
  style: PropTypes.object
}

export default Loader
