import React, { useState } from "react";

function LabTube() {
  const [bubbles, setBubbles] = useState(false);

  function handleMouseEnter() {
    setBubbles(true);
  }
  function handleMouseLeave() {
    setBubbles(false);
  }

  return (
    <div style={{ position: "absolute" }}>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: 500 }}
        src="../images/test_tube.png"
        alt="test-tube"
      ></img>
      {bubbles ? (
        <img
          style={{ width: 100, position: "absolute", left: 200, top: 48 }}
          src="../images/bubbles.gif"
          alt="bubbles"
        ></img>
      ) : null}
      ;
    </div>
  );
}

export default LabTube;
