import React from 'react'
import LabQuestionsCard from './LabQuestionsCard'
import { useNavigate } from 'react-router-dom'

function LabQuestionsContainer() {

  const navigate = useNavigate()

  return (
    <div>
      <div id="question-1" className="question">
        <LabQuestionsCard />
      </div>
      <div id="question-2" className="question">
        <LabQuestionsCard />
      </div>
      <div id="question-3" className="question">
        <LabQuestionsCard />
      </div>
      <div id="finalize">
        <button onClick={() => navigate('/EndGame')}>Finalize</button>
      </div>
    </div>
  )
}

export default LabQuestionsContainer