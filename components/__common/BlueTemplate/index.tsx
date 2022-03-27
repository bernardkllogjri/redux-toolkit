import React from 'react'
import Logo from '../Logo'

import styles from './BlueTemplate.module.css'

type IBlueTemplate = {
  logoUrl: string,
  children: React.ReactNode
}

const BlueTemplate: React.FC<IBlueTemplate> = props => {
  const { logoUrl, children } = props

  return (
    <div className={styles.blueTemplate} data-testid='blue-template'>
      <Logo to={logoUrl} />
      {children}
    </div>
  )
}

export default BlueTemplate
