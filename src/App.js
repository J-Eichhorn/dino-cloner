import './App.css';
import Home from './Home';
import Lab from './Lab';
import EndGame from './EndGame';
import { Routes, Route } from "react-router-dom"
import DinosaurNursery from './DinosaurNursery';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(../images/blueprint.png)` 
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lab" element={<Lab />} />
        <Route path="/EndGame" element={<EndGame />} />
        <Route path="/DinosaurNursery" element={<DinosaurNursery />} />
      </Routes>
    </div>
  );
}

export default App;
