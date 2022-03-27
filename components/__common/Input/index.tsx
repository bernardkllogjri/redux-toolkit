import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect, handlers, selectors } from '../../../Store'
import { dangerousHTML, t } from 'utils'
import { FormGroup } from 'components'

import styles from './Input.module.css'

class Input extends Component {
  constructor (props, context) {
    super(props)

    // this.handleOnFocus = this.handleOnFocus.bind(this)
    // this.handleOnBlur = this.handleOnBlur.bind(this)
    // this.handleOnChange = this.handleOnChange.bind(this)
    // this.handleOnReset = this.handleOnReset.bind(this)
    this.state = { focused: false }
  }

  // componentDidMount () {
  //   const { addRef } = this.props
  //   addRef && addRef(this)
  // }

  // componentWillUnmount () {
  //   const { removeRef } = this.props
  //   removeRef && removeRef(this)
  // }

  // handleOnFocus () {
  //   this.setState({ focused: true })
  // }

  // handleOnBlur () {
  //   this.setState({ focused: false })
  // }

  // handleOnChange () {
  //   const value = this.ref.value || ''
  //   let { name, form, formName, onChange, onChangeAddon } = this.props
  //   form = form || { value: '' }
  //   if (onChange) return onChange(name, value)
  //   handlers.formFieldsUpdate(formName, { [name]: { ...form, value } })
  //   onChangeAddon && onChangeAddon(value, name)
  // }

  // handleOnReset () {
  //   let { name, form, formName } = this.props
  //   form = form || { value: '' }
  //   handlers.formFieldsUpdate(formName, { [name]: { ...form, value: '' } })
  // }

  render () {
    const { focused } = this.state
    let {
      label,
      placeholder,
      hintText,
      prefix,
      addon,
      type,
      name,
      value,
      mandatory,
      disabled,
      clearable,
      hideError,
      className,
      limit,
      dataTestid,
      form
    } = this.props
    form = form || { value: '' }
    const inputClassNames = ['ta-form-control']
    if (addon || limit) inputClassNames.push('has-addon')

    return (
      <div 
        // ref={wrapper => { this.wrapper = wrapper }}
        className={className}
      >
        <FormGroup
          focused={focused}
          filled={!!value || !!form.value}
          disabled={disabled || form.disabled}
          labelText={label || form.label}
          labelMandatory={mandatory || form.mandatory}
        >
          <div className='ta-form-control-wrapper'>
            {prefix && (
              <div className='ta-form-control__prefix'>{prefix}</div>
            )}
            <input
              className={inputClassNames.join(' ')}
              data-testid={dataTestid}
              // ref={ref => { this.ref = ref }}
              type={type || form.type || 'text'}
              name={name}
              value={value !== undefined ? value : form.value}
              placeholder={placeholder || form.placeholder}
              // onFocus={this.handleOnFocus}
              // onBlur={this.handleOnBlur}
              // onChange={this.handleOnChange}
              maxLength={limit && limit}
              disabled={disabled || form.disabled}
              autoComplete='off'
            />
          </div>
          {addon && (
            <div className='ta-form-control__addon'>
              {addon}
            </div>
          )}
          {limit && (
            <div className='ta-form-control__addon'>
              {`${form.value.length} / ${limit}`}
            </div>
          )}
          {(hintText || limit) && (
            <div className='ta-form-control__hint'>
              {!hintText && limit && t('errors.maxCharacters', [{ key: 'LIMIT', value: limit }])}
              {dangerousHTML(hintText)}
            </div>
          )}
          {clearable && form.value && (
            <div 
              className='ta-form-control__btn-clear' 
              // onClick={this.handleOnReset} 
            />
            //   <FontAwesome5 icon='times' type='solid' />
            // </div>
          )}
          {/* {!hideError && (
            <Error name={name} />
          )} */}
        </FormGroup>
      </div>
    )
  }
}

// Input.propTypes = {
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   hintText: PropTypes.string,
//   type: PropTypes.string,
//   name: PropTypes.string,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   mandatory: PropTypes.bool,
//   disabled: PropTypes.bool,
//   hideError: PropTypes.bool,
//   limit: PropTypes.number,
//   dataTestid: PropTypes.string,
//   form: PropTypes.object
// }

// const maps = (state, props) => ({
//   form: selectors.formFieldSelector(state, { name: props.name, formName: props.formName })
// })

export default Input
