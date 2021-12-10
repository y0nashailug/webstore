const loadSprites = () => {
    const xmlFile = 'sprite.xml'
    const loadXML = new XMLHttpRequest()

    loadXML.open('GET', `${window.location.origin}/${xmlFile}`, true)
    loadXML.send()

    loadXML.onload = () => {
        const xmlString = loadXML.responseText
        const parser = new DOMParser()
        const mySpritesDoc = parser
          .parseFromString(xmlString, 'text/xml')
          .documentElement
          
        const addSprites = mySpritesDoc.childNodes
        for (let k = 0; k < addSprites.length; k += 1) {
          const sprite = addSprites.item(k).cloneNode(true)
          document.getElementById('spriteDefs').appendChild(sprite)
        }
      }
}
  
export default loadSprites
  