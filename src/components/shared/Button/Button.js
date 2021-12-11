import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import './Button.css'
import { buttonVariants } from '../../../utils'

const Button = ({ variant = 'primary', className, isWorking, iconSize, icon, children, disabled, onClick }) => {

    //Mark: - such as variants
    const getButtonStyles = {
        background: buttonVariants[variant]
    }

    return (
        <button
            type="button"
                // :class="[variant, { iconOnly: !$slots.default }, { isActive }]"
            className={`primary inline-flex items-center justify-center
             h-8 align-middle leading-none whitespace-no-wrap rounded-sm
              transition-all duration-100 appearance-none cursor-pointer select-none px-3 ` + className}
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
    variant: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool
}

export default Button