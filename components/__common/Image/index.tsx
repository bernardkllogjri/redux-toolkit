import React from 'react'
import PropTypes from 'prop-types'

type IImage = {
  src: string,
  alt: string,
  Component?: string,
}

const Image: React.FC<IImage> = props => {
  const { Component, ...rest } = props
  if(Component){
    return <Component {...rest} data-testid='image' />
  }
  return (
    <img {...rest} data-testid='image' />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
