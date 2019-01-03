/** @jsx h */
import * as DOM from 'dom-chef'
import css from 'css-in-js-utils'
import Logger from './utilities/CustomElementLogger'
// import registerElement from './utilities/registerElement'
import createElement from './utilities/createElement'

const h = DOM.h

const logger = new Logger('CopartButton')
const log = logger.log

interface IProps {
  variant: string
  intent: string
  iconSide: string
  icon: string
}

const defaultProps: IProps = {
  variant: 'secondary',
  intent: 'normal',
  iconSide: 'left',
  icon: '',
}

const element = createElement({
  styles: require('./copart-button.css'),
  nativeElement: HTMLElement,
  name: 'CopartButton',
  tag: 'copart-button',
  extends: 'button',
  shadow: true,
  defaultProps,

  didMount() {
    log('ELEMENT DID MOUNT, YO')
  },
})

const CopartButton = element((props) => {
  log('render()')

  return (
    <button>
      <slot />
    </button>
  )
})

export default CopartButton
