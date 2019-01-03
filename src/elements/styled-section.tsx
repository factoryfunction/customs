/** @jsx h */
import * as DOM from 'dom-chef'
import css from 'css-in-js-utils'
import Logger from './utilities/CustomElementLogger'
import createElement from './utilities/createElement'

const h = DOM.h

const logger = new Logger('StyledSection')
const log = logger.log

interface IProps {
  styles: ''
}

const defaultProps: IProps = {
  styles: '',
}

const element = createElement({
  nativeElement: HTMLElement,
  name: 'StyledSection',
  tag: 'styled-section',
  extends: 'button',
  shadow: true,
  defaultProps,

  didMount() {
    log('ELEMENT DID MOUNT, YO ss')
  },
})

const StyledSection = element((props: IProps) => {
  console.log('render ss()', { props })

  return (
    <section>
      <style type="text/css">{':host > section { background: blue; }    h2 { color: white; }'}</style>
      <slot />
    </section>
  )
})

export default StyledSection
