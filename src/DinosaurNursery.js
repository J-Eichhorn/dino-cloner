
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyProvider';
import DinoCardContainer from './DinoCardContainer';
import { Button, Typography } from '@mui/material';
function DinosaurNursery(){


  const navigate = useNavigate()

  const { dinosaurs } = useContext(MyContext)

  return (
    <div id="nursery-container">
      <Typography variant="h2" style={{color: "white"  }}>Dino Nursery</Typography><br></br>
      <Button variant="contained" onClick={() => {navigate("/")}}>Back to Home</Button>
      <div>
        <DinoCardContainer dinosaurs={dinosaurs} />
      </div>
    </div>
  );
}

export default DinosaurNursery;
