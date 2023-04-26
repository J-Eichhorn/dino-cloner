
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyProvider';
import DinoCardContainer from './DinoCardContainer';
import { Button } from '@mui/material';
function DinosaurNursery(){


  const navigate = useNavigate()

  const { dinosaurs } = useContext(MyContext)

  return (
    <div id="nursery-container">
      <h1>Dinosaur Nursery</h1>
      <Button variant="contained" onClick={() => {navigate("/")}}>Back to Home</Button>

      <div>
        <DinoCardContainer dinosaurs={dinosaurs} />
      </div>
    </div>
  );
}

export default DinosaurNursery;
