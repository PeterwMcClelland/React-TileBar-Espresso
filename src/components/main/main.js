import React from "react";
import { Link } from 'react-router-dom';

function Main()  {
    return (
        <>
        <body className="background">
        <header className="header">
            <h1 className="titleh1">TileBar</h1>
            <nav className="navbar">
                <ul className="navcomponents">
                    <li id="about">About</li>
                    <Link to="/menu">
                    <li>Menu</li>
                    </Link>
                    <li id="gallery">Gallery</li>
                    <li id="contact">Contact</li>
                </ul>
            </nav>
        </header>
            <div className="mainbody">
            
            </div> 
        </body>

        </>
    )
}

export default Main;