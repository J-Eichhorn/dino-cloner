import React, { useEffect, useState } from 'react'

import DinoCardContainer from './DinoCardContainer';

function DinosaurNursery() {
  const [dinosaurs, setDinosaurs] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/Dinosaurs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDinosaurs(data);
        
      });
  }, []);
  return (
    <div>DinosaurNursery
      <div>
        <DinoCardContainer dinosaurs={dinosaurs}/>
      </div>
    </div>
    
  )
}

export default DinosaurNursery