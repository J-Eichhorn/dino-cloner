import React from 'react'
import DinoCard from './DinoCard'

function DinoCardContainer({dinosaurs}) {


    const dinosaursToRender = dinosaurs.map((dinosaur) => {
        return <DinoCard key={dinosaur.id} dinosaur={dinosaur} />;
    })
  return (
    <div>
        {dinosaursToRender}
    </div>
  )
}

export default DinoCardContainer