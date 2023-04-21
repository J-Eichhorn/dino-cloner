import React from 'react'
import LabQuestionsCard from './LabQuestionsCard'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function LabQuestionsContainer() {

  const [question1, setQuestion1] = useState(false)

  useEffect(() => {
    setQuestion1(true)
  }, [])

  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)
  const [finalize, setFinalize] = useState(false)

  function showQuestions() {
   if (question2 === false) {
    setQuestion2(true)
   } else if (question3 === false) {
    setQuestion3(true)
   } else if (finalize === false) {
    setFinalize(true)
   }
  }

  const navigate = useNavigate()

  return (
    <div>
      <div id="question-1" className={`fade-in ${question1 ? 'active' : ''}`}>
        <LabQuestionsCard showQuestions={showQuestions}/>
      </div>
      <div id="question-2" className={`fade-in ${question2 ? 'active' : ''}`}>
        {question2 ? <LabQuestionsCard showQuestions={showQuestions}/> : null}
      </div>
      <div id="question-3" className={`fade-in ${question3 ? 'active' : ''}`}>
        {question3 ? <LabQuestionsCard showQuestions={showQuestions}/> : null}
      </div>
      <div id="finalize">
        {finalize ? <button className="submit" onClick={() => navigate('/EndGame')}>Finalize</button> : null}
      </div>
    </div>
  )
}

export default LabQuestionsContainer