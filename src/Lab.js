import React, {useState, useEffect} from 'react'
import LabQuestionsContainer from './LabQuestionsContainer'
import LabTube from './LabTube'
function Lab() {

const [questions, setQuestions] = useState([])

useEffect(()=> {
  fetch('http://localhost:3000/questions')
.then(res => res.json())
.then(data => {
  console.log(data)
  setQuestions(data)})
}, []) 

const question = questions.sort(() => .5 - Math.random()).slice(0, 3)


  return (
    <div id="lab-container">
      <div id="lab-left"> 
      <br></br>
      <br></br>
          <LabTube  />
        </div>
        <div id="lab-right">
          <LabQuestionsContainer question={question}/>
        </div>
    </div>
  )
}

export default Lab