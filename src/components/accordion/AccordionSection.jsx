import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useAccordion from './useAccordion'

const AccordionSection = ({ children = null }) => {
  const { isOpen, get } = useAccordion()
  console.log(isOpen)
  // const isOpen = false
  const onClick = () => true // Action, useAccordion
  const { label } = children[0].props
  return (
    <Section>
      <ActionContainer onClick={onClick}>
        {label}
        <Chevron>
          <span>&#9650;</span>
          {/* {isOpen && <span>&#9660;</span>} */}
        </Chevron>
      </ActionContainer>
      {/* {isOpen && <SubContainer>{children}</SubContainer>} */}
      <SubContainer>{children}</SubContainer>
    </Section>
  )
}

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
}

const Section = styled.div`
  background: #6db65b;
  border: 1px solid #008f68;
  padding: 5px 10px;
`

const ActionContainer = styled.div`
  cursor: pointer;
`

const Chevron = styled.div`
  float: right;
`

const SubContainer = styled.div`
  background: #6db65b;
  border: 2px solid #008f68;
  margin-top: 10;
  padding: 10px 20px;
`

export default AccordionSection
