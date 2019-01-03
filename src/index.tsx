import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './elements/styled-section'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import './elements/copart-button'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
