import './App.css';
import Home from './Home';
import Lab from './Lab';
import EndGame from './EndGame';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lab" element={<Lab />} />
        <Route path="/EndGame" element={<EndGame />} />
      </Routes>
    </div>
  );
}

export default App;
