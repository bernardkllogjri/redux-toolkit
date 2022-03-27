import NextLink from 'next/link'
import ComponentsLink from './Link'

export { default as BlueTemplate } from './BlueTemplate'
export { default as Image } from './Image'
export { default as Logo } from './Logo'
export { default as Row } from './Row'
export { default as Col } from './Col'
export { default as Loader } from './Loader'
export { default as Spinner } from './Spinner'
export { default as Message } from './Message'
export { default as FormGroup } from './FormGroup'
export { default as Input } from './Input'


export const Link = (props) => <ComponentsLink Component={NextLink} {...props} />