import React from "react";

function DinoCard({ dinosaur }) {
  return (
    <div className="nursery-card">
      <img src={dinosaur.image}></img>
      <div>
      <h1>{dinosaur.name}</h1>
      <p>{dinosaur.dinosaur}</p>
      </div>
    </div>
  );
}

export default DinoCard;
