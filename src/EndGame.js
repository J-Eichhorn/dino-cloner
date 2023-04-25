
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, TextField } from "@mui/material";

function EndGame() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  function handleSubmitDino(e) {
    
    e.preventDefault();
    const newDino = {
      name,
    };

const navigate = useNavigate()

const location = useLocation()
const state = location.state
console.log(state)

let dinoImage = ''
switch (state) {
  case 1:
    dinoImage = "../images/pteradon.png";
    break;
  case 2:
    dinoImage = "../images/sauropod.png";
    break;
  case 3:
    dinoImage = "../images/theropod.png";
    break;
}


  return (
    <div>
      <h1>{state !== null ? "Life, uh, finds a way" : "You shouldn't have played God"}</h1>
      <img src= {dinoImage} />
      <div>
        <Button variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default EndGame;
