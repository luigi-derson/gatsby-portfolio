import React from 'react'

import Accordion from '../components/accordion/Accordion'

export default function Dev() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Accordion>
        <div label="first-menu">
          <p>Item 1</p>
          <p>Item 2</p>
        </div>
        <div label="second-menu">
          <p>Item 1</p>
          <p>Item 2</p>
        </div>
        <div label="third-menu">
          <p>Item 1</p>
          <p>Item 2</p>
        </div>
      </Accordion>
    </div>
  )
}
