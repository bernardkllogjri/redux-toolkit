import React from 'react'
import styles from './Row.module.css'

const Row = props => {
  const { children, className, noOffset } = props
  const classNames = [styles.row]
  if (className) classNames.push(className)
  if (noOffset) classNames.push(styles.noOffset)

  return (
    <div className={classNames.join(' ')} data-testid='row'>
      {children}
    </div>
  )
}

export default Row
