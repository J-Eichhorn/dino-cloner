import React from "react";

function DinoCard({ dinosaur }) {
  return (
    <div className="dino-card">
      <img style={{height: 200, padding: 50}} src={dinosaur.image} alt={dinosaur.species}></img>
      <div>
      <h1>{dinosaur.name}</h1>
      <p>{dinosaur.dinosaur.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default DinoCard;
