import PropTypes from 'prop-types';

export default function ForLoop(props) {
  if (props.items.length === 0) {
    if (props.ifNoItems) {
      return props.ifNoItems;
    }
    return null;
  }
  return props.items.map((item, index) => {
    return props.forEachItem(item, index);
  })
}

ForLoop.propTypes = {
  items: PropTypes.array.isRequired,
  forEachItem: PropTypes.func.isRequired,
  ifNoItems: PropTypes.node || PropTypes.node
}