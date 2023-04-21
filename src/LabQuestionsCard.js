import React, { useState } from 'react'

function LabQuestionsCard({showQuestions}) {

const [click, setClick] = useState(false)

  return (
    <div>
      <h2>This is a sample question.</h2>
      <button disabled={click} 
        onClick={() => {
        showQuestions()
        setClick(true)}}>Answer</button>
      <button disabled={click} 
        onClick={() => {
        showQuestions()
        setClick(true)}}>Answer</button>
    </div>
  )
}

export default LabQuestionsCard