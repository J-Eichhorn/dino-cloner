import React, { useState } from 'react'

function LabQuestionsCard({showQuestions, randomQuestion}) {

const [click, setClick] = useState(false)

const answers = randomQuestion?.options?.map((option) => {
  return <button 
  key={option}
  disabled={click} 
  onClick={() => {
  showQuestions()
  setClick(true)
if (option === randomQuestion.answer) {
  console.log('1 point')
}}}>{option}</button>
})

  return (
    <div>
      <h2>{randomQuestion?.question}</h2>
      {answers}
    </div>
  )
}

export default LabQuestionsCard