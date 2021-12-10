const Icon = ({ name, size, fill }) => {
    
    const iconStyles = {
        width: `${size}px`,
        height: `${size}px`,
        fill,
        ...(fill !== 'currentColor' ? { color: fill }: null),
    }

    return (
        <svg style={iconStyles}>
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={'#' + name}
        ></use>
      </svg>
    )
}

export default Icon