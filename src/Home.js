import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Typography } from "@mui/material";

// changing ui 
function Home() {
  return (
    <div id="home-container">
      <div id="home-left">
        <Typography variant="h2" style={{color: "white"  }}>Dino Cloner Lab</Typography>
      </div>
      <div id="home-right">
        <nav className="navbar">
          <ButtonGroup style={{ margin: 20 }}>
            <Button
              style={{ fontSize: 25 }}
              variant="contained"
              component={Link}
              to="/Lab"
            >
              Lab
            </Button>
            <Button
              style={{ fontSize: 25 }}
              variant="contained"
              component={Link}
              to="/DinosaurNursery"
            >
              Nursery
            </Button>
            <Button
              style={{ fontSize: 25 }}
              variant="contained"
              component={Link}
              to="/Waiver"
            >
              Waiver
            </Button>
          </ButtonGroup>
        </nav>
      </div>
    </div>
  );
}

export default Home;
