import React from 'react'
import PropTypes from 'prop-types'
import styles from './Col.module.css'

const Col = props => {
  const { children, size, className, ...rest } = props
  const classNames = [styles.col]
  if (size) classNames.push(styles[`col-${size}`])
  if (className) classNames.push(className)

  return (
    <div {...rest} className={classNames.join(' ')} data-testid='col'>
      {children}
    </div>
  )
}

Col.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
}

export default Col
