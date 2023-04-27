import React, { useState } from "react";

function MiniGameCracks() {
  const [click, setClick] = useState(true);
  function handleClick() {
    setClick(!click);
  }

  return (
    <div
      style={{
        top: 0,
        left: 42,
      }}
    >
      <figure
        id="damage_1"
        style={{
          position: "absolute",
          height: 117,
          width: 119,
          top: 112,
          left: 336,
        }}
      >
        <img src="../images/damage_1.png"></img>
      </figure>
      <figure
        id="damage_2"
        style={{
          position: "absolute",
          height: 104,
          width: 112,
          top: 208,
          left: 73,
        }}
      >
        <img src="../images/damage_2.png"></img>
      </figure>
      <figure
        id="damage_3"
        style={{
          position: "absolute",
          height: 113,
          width: 85,
          top: 498,
          left: 488,
        }}
      >
        <img src="../images/damage_3.png"></img>
      </figure>
      <figure
        id="damage_4"
        style={{
          position: "absolute",
          height: 117,
          width: 119,
          top: 481,
          left: -28,
        }}
      >
        <img src="../images/damage_4.png"></img>
      </figure>
    </div>
  );
}

export default MiniGameCracks;
