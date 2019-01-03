import * as React from 'react'

type CustomElementT = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'styled-section': any
      'copart-button': any
      slot: any
    }
  }
}
