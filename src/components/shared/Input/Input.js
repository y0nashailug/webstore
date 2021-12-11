import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import './Input.css'

const Input = ({ className, icon, hasIcon, iconSize, onBlur, type }) => {

    const iconStyles = {
        '--iconContainerWidth': `${iconSize * 2}px`
    }

    const handleOnBlur = (e) => {
        onBlur(e.target.value)
    }

    return (
        <div style={iconStyles} className="inputContainer">
        {hasIcon ?<div v-if="icon" className="inputIconContainer">
          <Icon name={icon} />
        </div>: null}
        <input
            className='input'
            type={type ? type: 'text'}
            // onInput={(e) => onInput(e.target.value)}
            onBlur={handleOnBlur}
        />
      </div>
    )
}

Input.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    hasIcon: PropTypes.bool,
    iconSize: PropTypes.number,
    onBlur: PropTypes.func.isRequired,
    type: PropTypes.string
}

export default Input