import PropTypes from 'prop-types'

const Icon = ({ className, name, size = 18, fill = '#fff' }) => {
    const iconStyles = {
        width: `${size}px`,
        height: `${size}px`,
        fill,
        ...(fill !== 'currentColor' ? { color: fill }: null),
    }

    return (
        <svg style={iconStyles} className={className}>
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={'#' + name}
        ></use>
      </svg>
    )
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
}
export default Icon