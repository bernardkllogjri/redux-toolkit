import React from 'react'
import PropTypes from 'prop-types'

import styles from './Message.module.css'

const Message = props => {
  const {
    type,
    big,
    label,
    children,
    noIcon,
    show,
    noMargin,
    small,
    className,
    onClick,
    showBorder,
    closable
  } = props
  const availableTypes = {
    success: 'Success', 
    warning: 'Warning',
    error: 'Error',
    info: 'Info'
  }
  const classNames = [styles.message]
  classNames.push(availableTypes[type] ? `type-${availableTypes[type]}` : `type${availableTypes.success}`)
  if (className) classNames.push(className)
  if (big) classNames.push(styles.big)
  if (small) classNames.push(styles.small)
  if (show) classNames.push(styles.active)
  if (noMargin) classNames.push(styles.noMargin)
  if (showBorder) classNames.push(styles.withBorder)
  let icon = 'check-square'
  if (type === 'warning') icon = 'lightbulb'
  if (type === 'error') icon = 'exclamation-triangle'
  if (type === 'info') icon = 'lightbulb'

  return (
    <div className={classNames.join(' ')} data-testid='message'>
      {(type === 'warning' || closable) && onClick && (
        <div className='messageCloseBtn' onClick={onClick} data-testid='message-close'>
          {/* <FontAwesome5 icon='times' /> */}
        </div>
      )}
      {label && (
        <div className='messageTitle' data-testid='message-title'>
          {/* {!noIcon && (
            <FontAwesome5 icon={icon} type='solid' />
          )} */}
          {label}
        </div>
      )}
      {!label && (
        <div className='messageIcon' data-testid='message-icon'>
          {/* <FontAwesome5 icon={icon} type='solid' /> */}
        </div>
      )}
      {children && (
        <div className={`messageContent ${label ? '' : 'noLabel'}`} data-testid='message-children'>{children}</div>
      )}
    </div>
  )
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  show: PropTypes.bool,
  hide: PropTypes.bool
}

export default Message
