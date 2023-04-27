import React, { useState } from "react";

function MiniGameCracks() {
  const [click, setClick] = useState(true);
  function handleClick() {
    setClick(!click);
  }

  return (
    <div>
      <figure id="damage_1" style={{ height: 117, width: 119 }}>
        <img src="../images/damage_1.png"></img>
      </figure>
      <figure id="damage_2" style={{ height: 104, width: 112 }}>
        <img src="../images/damage_2.png"></img>
      </figure>
      <figure id="damage_3" style={{ height: 113, width: 85 }}>
        <img src="../images/damage_3.png"></img>
      </figure>
      <figure id="damage_4" style={{ height: 117, width: 119 }}>
        <img src="../images/damage_4.png"></img>
      </figure>
    </div>
  );
}

export default MiniGameCracks;
