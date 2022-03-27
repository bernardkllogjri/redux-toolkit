import React from 'react'
import styles from './Spinner.module.css'

const Spinner = props => {
  const { icon = 'spinner', type = 'solid' } = props

  return (
    <div className={styles.spinner} data-testid='spinner'>
      {/* <FontAwesome5 icon={icon} type={type} spin /> */}
    </div>
  )
}

export default Spinner
