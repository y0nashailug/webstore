import PropTypes from 'prop-types'

const Avatar = ({ name = '', size, icon, className, avatarUrl }) => {

    const getImageStyle = () => {
        return {
          display: 'inline-block',
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '100%',
          backgroundImage: `url('${avatarUrl}')`,
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
    }
    return (
        <div style={getImageStyle()} className={className} /> 
    )
}

Avatar.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    icon: PropTypes.string,
    className: PropTypes.string,
}
export default Avatar