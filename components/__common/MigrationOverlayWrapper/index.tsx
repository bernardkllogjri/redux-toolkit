import React from 'react'
import { dangerousHTML, t } from 'utils'
import Spinner from '../Spinner'
import styles from './MigrationOverlay.module.css'

const MigrationOverlayWrapper = props => {
  const { doRedirect } = props
  const classNames = [styles.migrationOverlay]
  if (doRedirect) classNames.push(styles.active)

  return (
    <div className={classNames.join(' ')}>
      <div>
        <Spinner />
        {dangerousHTML(t('login.migrationSplashscreen.text'))}
      </div>
    </div>
  )
}

export default MigrationOverlayWrapper
