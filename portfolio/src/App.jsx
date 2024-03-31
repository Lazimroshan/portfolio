import "./App.css";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import Portfolio from "./Pages/Portfolio";
import Projects from "./Pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
