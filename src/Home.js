import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div id="home-container">
        <div id="home-left"> 
            <h1>Place Holder Home</h1>
        </div>
        <div id="home-right">
            <nav className="navbar">
                <Link to="/Lab">Start</Link>
                <Link to="/DinosaurNursery">Nursery</Link>
            </nav>
        </div>
    </div>
  )
}

export default Home