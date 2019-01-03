/** @jsx h */
import * as DOM from 'dom-chef'
import css from 'css-in-js-utils'

import registerElement from './registerElement'

const NOOP = (d) => (r) => r || d
const orNoop = (f, d) => f || NOOP(d)
const keys = Object.keys
const h = DOM.h

type PropHistoryT = [string, any, any][]

const withNewLine = (rest) => {
  return `\n${rest}`
}

const generateStyles = (css) => {
  // const css = require(`${css}`)
  // console.log(css, `${css}`)
  // const styles = withNewLine(css)
  return <style type="text/css">{css}</style>
}

declare global {
  interface NodeModule {
    parents: string[]
  }
}

export default (config) => (render) => {
  class CustomElement extends config.nativeElement {
    public styles: JSX.Element = generateStyles(config.styles)
    static elementName: string = config.name
    static config = config
    propHistory: PropHistoryT = []

    constructor() {
      super()

      this.elementWillRender = orNoop(config.elementWillRender, null)
      this.elementDidRender = orNoop(config.elementDidRender, null)
      this.elementWillUnmount = orNoop(config.elementWillUnmount, null)
      this.elementDidUnmount = orNoop(config.elementDidUnmount, null)
      this.elementDidMount = orNoop(config.didMount, null)
      this.render = orNoop(render, null)
      config.shadow && this.attachShadow({ mode: 'open' })
    }

    emptyShadowRoot() {
      // this.children.length = 0
      // this.innerHTML = ''
      try {
        Array.from(this.children).forEach((child) => {
          this.shadowRoot.removeChild(child)
        })
      } catch (error) {}
    }

    get pp() {
      return this.getAttributeNames().reduce((final, name) => {
        final[name] = this.getAttribute(name)
        return final
      }, {})
    }

    async scheduleRender(empty = true) {
      this.emptyShadowRoot()

      const props = this.pp

      console.log('schren', props)
      this.shadowRoot.prepend(this.styles)
      this.shadowRoot.append(this.render(props))
    }

    static get observedAttributes() {
      console.log('observedAttributes()', keys(config.defaultProps))
      return keys(config.defaultProps)
    }

    protected connectedCallback() {
      console.log('connectedCallback()')
      this.render(this.pp)
    }

    protected attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.propHistory.push([name, oldValue, newValue])
        return this.scheduleRender()
      }
    }
  }

  // customizers.forEach((customizer) => customizer(CustomElement))
  registerElement(CustomElement)
  return CustomElement
}
