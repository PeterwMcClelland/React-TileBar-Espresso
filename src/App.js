import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  
    return (
        <>
            <BrowserRouter>
                <div className="navbar">
                    <div id="tilebarnav" className="navlink">
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'ivory' : 'beige' })}>
                            TileBar
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/menu" style={({ isActive }) => ({ 
                            color: isActive ? 'ivory' : 'beige' })}>
                            Menu
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/gallery" style={({ isActive }) => ({ 
                            color: isActive ? 'ivory' : 'beige' })}>
                            Gallery
                        </NavLink>
                    </div>
                    <div className="navlink">
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'ivory' : 'beige' })}>
                            About
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/menu" element={<Menu />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
  
export default App;