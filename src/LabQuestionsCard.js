import React, { useState } from 'react'
import { ButtonGroup, Button } from '@mui/material'
function LabQuestionsCard({showQuestions}) {

const [click, setClick] = useState(false)

  return (
    <div>
      <h2>This is a sample question.</h2>
      <ButtonGroup>
      <Button variant='contained' disabled={click} 
        onClick={() => {
        showQuestions()
        setClick(true)}}>Answer</Button>
      <Button variant='contained' disabled={click} 
        onClick={() => {
        showQuestions()
        setClick(true)}}>Answer</Button>
        </ButtonGroup>
    </div>
  )
}

export default LabQuestionsCard