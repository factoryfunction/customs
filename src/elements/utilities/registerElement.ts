declare global {
  interface Window {
    __customRegistry: Object
  }
}

window.__customRegistry = {}

export default (Element, o = {}) => {
  window.__customRegistry[Element.name] = Element

  if (!customElements.get(Element.config.tag)) {
    customElements.define(Element.config.tag, Element, o)
  }
}
