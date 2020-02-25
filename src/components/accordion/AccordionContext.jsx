import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AccordionContext = createContext({}, () => {})

const AccordionProvider = ({ children = null }) => {
  const [state, setState] = useState({ test: false })
  return (
    <AccordionContext.Provider value={[state, setState]}>
      {children}
    </AccordionContext.Provider>
  )
}

AccordionProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
}

export { AccordionContext, AccordionProvider }
