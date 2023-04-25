import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyProvider';
import DinoCardContainer from './DinoCardContainer';

function DinosaurNursery(){


  const navigate = useNavigate()

  const { dinosaurs } = useContext(MyContext)

  return (
    <div>
      <h1>Dinosaur Nursery</h1>
      <button onClick={() => {navigate("/")}}>Back to Home</button>
      <div>
        <DinoCardContainer dinosaurs={dinosaurs}/>
      </div>
    </div>
    
  )
}

export default DinosaurNursery