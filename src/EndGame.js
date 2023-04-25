import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
function EndGame() {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  function handleSubmitDino(e) {
    
    e.preventDefault();
    const newDino = {
      name,
    };

  fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
    },
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //  setNewDino(data);
    });
  }
  const dinoForm = () => {
    <div className="form">
      <form onSubmit={handleSubmitDino}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined"> <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name your dinosaur"
          value={name}
        ></input></TextField>
      </form>
    </div>;
  };
  return (
    <div>
      <h1>End Game Screen</h1>
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
