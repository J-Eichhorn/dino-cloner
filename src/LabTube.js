import React, { useState } from "react";
import Bubbles from "./Bubbles";

function LabTube() {
  return (
    <div style={{position: "absolute"}}>
      <img
        style={{ width: 500 }}
        src="../images/test_tube.png"
        alt="test-tube"
      ></img>
      <img
        style={{ width: 100, position: "absolute", left: 200, top: 48 }}
        src="../images/bubbles.gif"
        alt="bubbles"
      ></img>
      <div style={{ position: "absolute", width: 500 }}></div>
    </div>
  );
}

export default LabTube;
