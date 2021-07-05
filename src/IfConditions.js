import PropTypes from 'prop-types'

export const IfCondition = (props) => {
  if (props.condition) {
    return props.children
  }
  return null
}
IfCondition.propTypes = {
  condition: PropTypes.any.isRequired
}

export const ElseIfCondition = (props) => {
  return props.children
}

ElseIfCondition.propTypes = {
  condition: PropTypes.any.isRequired
}

export const ElseCondition = (props) => {
  return props.children
}

export const IfElseCondition = (props) => {
  if (props.condition) {
    return props.children[0]
  }
  return props.children[1]
}

IfElseCondition.propTypes = {
  condition: PropTypes.any.isRequired
}

export function IfMultiCondition(props) {
  for (let i = 0; i < props.children.length; i++) {
    const child = props.children[i]
    if (child.type === IfCondition && child.props.condition) {
      return child.props.children
    } else if (child.type === ElseIfCondition && child.props.condition) {
      return child.props.children
    } else if (child.type === ElseCondition) {
      return child.props.children
    }
  }
  return null
}
