import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {


  return (
    <>
    <div id="container">
  
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>

      <div id="main-section">
      <Routes>
      <Route path="/blue" element={<h1>{<Blue/>}</h1>} />
      <Route path="/red" element={<h1>{<Red/>}</h1>} />
      <Route path="/" element={<h1>{<Home/>}</h1>} />
      </Routes>
      </div>
    </div>

    </>
  )
}

export default App
