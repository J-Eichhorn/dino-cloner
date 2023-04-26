import "./App.css";

import MyProvider from "./MyProvider";
import Home from "./Home";
import Lab from "./Lab";
import EndGame from "./EndGame";
import { Routes, Route } from "react-router-dom";
import DinosaurNursery from "./DinosaurNursery";
import { createTheme, ThemeProvider } from "@mui/material";
// adding another commit

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
        </Routes>
      </MyProvider>
    </div>
    </ThemeProvider>
  );
}

export default App;
