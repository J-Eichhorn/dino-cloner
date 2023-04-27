import React, { useEffect, useState } from "react";
import MiniGameContainer from "./MiniGameContainer";
function MiniGame() {
  const [damage, setDamage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Damage")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDamage(data);
      });
  }, []);
  return (
    <div>
      MiniGame<div></div>
      <MiniGameContainer damage={damage}></MiniGameContainer>
    </div>
  );
}

export default MiniGame;
