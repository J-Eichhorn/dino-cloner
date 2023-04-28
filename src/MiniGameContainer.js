import React from "react";
import MiniGameCracks from "./MiniGameCracks";

function MiniGameContainer({ damage }) {
  return (
    <div style={{    position: "absolute",
        left: 400}}  >
      <img
        style={{ width: 600 }}
        src="../images/test_tube.png"
        alt="test-tube"
      ></img>
      <MiniGameCracks></MiniGameCracks>
    </div>
  );
}

export default MiniGameContainer;
