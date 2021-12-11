export function capitilize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1)
}

export function responseFields(attributes) {
    let attrs = ''
    if (attributes.length) {
      attributes.forEach(attr => {
        attrs += `${attr.id},`
      });
    }
    return attrs
}

export function isRequired(value) {
    return ['', null, undefined].indexOf(value) === -1
}

export const buttonVariants = {
  primary: '#10844c', //  
  success: '#0B875B', //  
  danger: '#E13C3C',
  warning: '#F89C1C',
  info: '#0fb9b1',
  secondary: '#F4F5F7', //  1b1f3c
  brand: '#1b1f3c', //  
}