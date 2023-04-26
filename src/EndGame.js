import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function EndGame() {
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state;
  console.log(state);

  let dinoImage = "";
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
    case null:
      dinoImage = "../images/trex_skull.png";
      break;
  }

  return (
    <div style={{paddingTop: '5%'}}>
      <Typography variant="h2" style={{color: "white"  }}>{state !== null
          ? "Life, uh, finds a way"
          : "You shouldn't have played God"}</Typography>
      <div className="spacer"></div>
      <img src={dinoImage} alt="dinosaur" />
      <div className="spacer"></div>
      <div>
        <Button
          variant="contained"
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
