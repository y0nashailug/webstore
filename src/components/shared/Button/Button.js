import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import './Button.css'
import { buttonVariants } from '../../../utils'

const Button = ({ type = 'button', variant = 'primary',
 className = '', isWorking = false, iconSize = 18,
  icon, children, disabled, onClick }) => {

    const getButtonStyles = {
        '--bg-variant': buttonVariants[variant],
        '--primary': buttonVariants.primary,
    }

    return (
        <button
            type={type}
                // :class="[variant, { iconOnly: !$slots.default }, { isActive }]"
            className={`inline-flex items-center justify-center
             h-8 align-middle leading-none whitespace-no-wrap rounded-sm
              transition-all duration-100 appearance-none cursor-pointer
               select-none px-3 ` + className + ' ' + variant }
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
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool
}

export default Button