import { useContext } from 'react'
import { AccordionContext } from './AccordionContext'

const useAccordion = () => {
  const [state, setState] = useContext(AccordionContext)

  const getState = label => {
    setState(currentState => ({ ...currentState, [label]: false }))
  }
  // const toggle = () => setState(state => state.isOpen: !state.isOpen)

  return { isOpen: state, get: getState }
}

export default useAccordion
