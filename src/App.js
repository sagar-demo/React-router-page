import { useEffect, useState } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './Navbar.css'; // Import the CSS file
import Service from "./Service";
import Signup from "./Signup";
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
