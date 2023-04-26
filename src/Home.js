import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { MyContext } from "./MyProvider";

function Home() {

  const { waiver } = useContext(MyContext)

  return (
    <div id="home-container">
      <div id="home-left">
        <Typography className="title" variant="h2" style={{color: "white"}}>Dino Cloner Lab</Typography>
        <div id="home-dna">
        <img style={{width: 400}}src="../images/mr_dna.png" />
        </div>
      </div>
      <div id="home-right">
        <nav className="nav-bar">
          <ButtonGroup style={{ margin: 20 }}>
            <Button
              style={{ fontSize: 25 }}
              variant="contained"
              component={Link}
              to={waiver ? "/Lab" : null}
              onClick={() => {
                if (waiver === false) {
                  alert("Please read and agree to the waiver to proceed")
                }
              }}
              
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
              to={waiver ? null : "/Waiver"}
              onClick={() => {
                if(waiver === true) {
                  alert("You already agreed, no need to check the fine print")
                }
              }}
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
