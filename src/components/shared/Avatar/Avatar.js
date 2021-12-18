import PropTypes from 'prop-types'

const Avatar = ({ name = '', size = 32, icon, className, avatarUrl }) => {

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
    const avatarColors = [
        '#DA7657',
        '#6ADA57',
        '#5784DA',
        '#AA57DA',
        '#DA5757',
        '#DA5792',
        '#57DACA',
        '#57A5DA',
      ]
    const getColorFromName = () => {
        return avatarColors[
          name.toLocaleLowerCase().charCodeAt(0) % avatarColors.length
        ]
      }
    const getLetterStyle = () => {
        return {
          width: `${size}px`,
          height: `${size}px`,
          background: getColorFromName(),
          fontSize: `${Math.round(size / 2)}px`,
        }
    }

    return (
        <>
            { avatarUrl ? 
                <div style={getImageStyle()} className={className} />:
            <div style={getLetterStyle()} className="letter"></div>}
        </>
    )
}

Avatar.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    icon: PropTypes.string,
    className: PropTypes.string,
}
export default Avatar