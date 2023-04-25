import React from 'react'
import LabQuestionsContainer from './LabQuestionsContainer'
import LabTube from './LabTube'
function Lab() {
  return (
    <div id="lab-container">
      <div id="lab-left"> 
          <LabTube  />
        </div>
        <div id="lab-right">
          <LabQuestionsContainer />
        </div>
    </div>
  )
}

export default Lab