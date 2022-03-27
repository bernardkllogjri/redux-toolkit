import React from 'react'
import PropTypes from 'prop-types'
// import { handlers } from '../../Store'

type ILink = {
  to?: string, 
  style?: object,
  action?: Function,
  external?: boolean, 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => {},
  disabled?: boolean,
  className?: string,
  Component?: string,
}

const Link: React.FC<ILink> = props => {
  const {
    to,
    children,
    style,
    action,
    external,
    onClick,
    Component,
    disabled,
    ...rest
  } = props
  const _onClick = e => {
    if (action) action()
    if (external) return null
    e.preventDefault()
    e.stopPropagation()
    if (!to || to.length === 0) return null
    // handlers.navigateToPath(to)
  }
  if (!disabled) {
    const linkProps = {
      'data-testid': 'link',
      href: to,
      onClick: onClick || _onClick,
      style: style,
      ...rest,
    }
    if(Component) {
      return (
        <Component {...linkProps}>{children}</Component>
      )
    }
    return (
      <a {...linkProps}>
        {children}
      </a>
    )
  } else {
    return (
      <div data-testid='link-disabled' {...rest} style={style}>
        {children}
      </div>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string,
  style: PropTypes.object,
  action: PropTypes.func,
  external: PropTypes.bool,
  onClick: PropTypes.func
}

export default Link
