

import './App.css';
import {useState, createContext} from 'react'
import MyProvider from './MyProvider';
import Home from './Home';
import Lab from './Lab';
import EndGame from './EndGame';
import { Routes, Route } from "react-router-dom"
import DinosaurNursery from './DinosaurNursery';
import Waiver from './Waiver';
import { Button } from '@mui/material';
function App() {



const theme = createTheme({
  palette: {
    primary: {
      main: '#1d41a3'
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div
      className="App"
      style={{
        backgroundImage: `url(../images/blueprint.png)`,
      }}
    >
      <MyProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lab" element={<Lab />} />
        <Route path="/EndGame" element={<EndGame />} />
        <Route path="/DinosaurNursery" element={<DinosaurNursery />} />
        <Route path="/Waiver" element={<Waiver />} />
      </Routes>


      </MyProvider>
    </div>
    </ThemeProvider>
  );
}

export default App;
