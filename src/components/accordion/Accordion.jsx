import React from 'react'

import AccordionProvider from './AccordionContext'

export default function Index({ children }) {
  return <AccordionProvider>{children}</AccordionProvider>
}
