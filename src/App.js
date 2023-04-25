import './App.css';
import {useState, createContext} from 'react'
import MyProvider from './MyProvider';
import Home from './Home';
import Lab from './Lab';
import EndGame from './EndGame';
import { Routes, Route } from "react-router-dom"
import DinosaurNursery from './DinosaurNursery';
import { Button } from '@mui/material';
function App() {

  return (
    <div className="App" style={{ 
      backgroundImage: `url(../images/blueprint.png)`,  
    }}>
      <MyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lab" element={<Lab />} />
        <Route path="/EndGame" element={<EndGame />} />
        <Route path="/DinosaurNursery" element={<DinosaurNursery />} />
      </Routes>

      </MyProvider>

    </div>
  );
}

export default App;
