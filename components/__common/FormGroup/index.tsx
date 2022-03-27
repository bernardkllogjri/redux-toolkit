import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormGroup.module.css'

type IFormGroup = {
  focused: boolean,
  filled: boolean,
  disabled: boolean,
  className?: string,
  labelText: string,
  labelMandatory: string,
}


const FormGroup: React.FC<IFormGroup> = props => {
  const {
    children,
    focused,
    filled,
    disabled,
    className,
    labelText,
    labelMandatory
  } = props
  const classNames = [styles.formGroup]
  if (className) classNames.push(className)
  if (focused) classNames.push(styles.focused)
  if (filled) classNames.push(styles.filled)
  if (disabled) classNames.push(styles.disabled)

  return (
    <div className={classNames.join(' ')}>
      {labelText &&
        <label>
          {labelText}
          {labelMandatory && ' *'}
        </label>
      }
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  focused: PropTypes.bool,
  filled: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  labelText: PropTypes.string,
  labelMandatory: PropTypes.bool
}

export default FormGroup
