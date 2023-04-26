import React from 'react'
import DinoCard from './DinoCard'

function DinoCardContainer({dinosaurs}) {


    const dinosaursToRender = dinosaurs.map((dinosaur) => {
        return <DinoCard key={dinosaur.id} dinosaur={dinosaur} />;
    })
  return (
    <div id='dino-card-container'>
        {dinosaursToRender}
    </div>
  )
}

export default DinoCardContainer