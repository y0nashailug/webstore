import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import './Button.css'

const Button = ({ isWorking, iconSize, icon, children, disabled, onClick }) => {

    //Mark: - such as variants
    const getButtonStyles = {}

    return (
        <button
            type="button"
                // :class="[variant, { iconOnly: !$slots.default }, { isActive }]"
            className="button inline-flex items-center justify-center h-8 align-middle
            leading-none whitespace-no-wrap rounded-sm transition-all pl-2
                duration-100 appearance-none cursor-pointer select-none px-3"
                disabled={disabled}
                style={getButtonStyles}
                onClick={onClick}>
                    {isWorking ? <Icon
                    size={iconSize}
                    name="spin"
                    className="spinner"
                    />: null }
                    {!isWorking && icon ? <Icon
                    size={iconSize}
                    name={icon}
                    className="spinner"
                    />: null }
            <div className={ isWorking || icon  ? 'pl-2': null}>
            {children}
            </div>
        </button>)
}

Button.propTypes = {
    isWorking: PropTypes.bool,
    iconSize: PropTypes.number,
    icon: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool
}

export default Button