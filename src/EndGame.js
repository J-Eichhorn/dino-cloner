import React from 'react'
import { useNavigate } from 'react-router-dom'

function EndGame() {

const navigate = useNavigate()

  return (
    <div>
      <h1>End Game Screen</h1>
      <div>
        <button onClick={() => {navigate("/")}}>Back to Home</button>
      </div>
    </div>
  )
}

export default EndGame