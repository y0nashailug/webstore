import Icon from '../Icon/Icon'
import './Input.css'

const Input = ({ icon, hasIcon, iconSize, onBlur, type }) => {

    const iconStyles = {
        '--iconContainerWidth': `${iconSize * 2}px`
    }

    const handleOnBlur = (e) => {
        onBlur(e.target.value)
    }
    return (
        <div style={iconStyles} className="inputContainer">
        {hasIcon ?<div v-if="icon" class="inputIconContainer">
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

Input.propTypes = {}

export default Input