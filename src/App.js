import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
  
    <BrowserRouter>
    <Link to="/"> Home</Link>
    <Link to="./About">About</Link>
    
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
