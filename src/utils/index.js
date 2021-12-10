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