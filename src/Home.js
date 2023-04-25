import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div id="home-container">
        <div id="home-left"> 
            <h1>Place Holder Home</h1>
        </div>
        <div id="home-right">
            <div className="navbar">
            <nav>
                <Link className="link" to="/Lab">Start</Link><br></br>
                <Link className="link" to="/DinosaurNursery">Nursery</Link><br></br>
                <Link className="link" to="/Waiver">Liability Waiver</Link>
            </nav>
            </div>
        </div>
    </div>
  )
}

export default Home