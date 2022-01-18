
import * as React from 'react';
import "./navbar.css"

export function Navbar() {
    console.log(document.querySelector("#body").scrollTop)
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/images/MYPNG.png" height="100px"></img>
            </div>
            <div className="navbar-list-div">
                <ul className="navbar-list">
                    <li><a><span>Home</span></a></li>
                    <li><a href="#about"><span>About</span></a></li>
                    <li><a><span>Resume</span></a></li>
                    <li><a><span>Services</span></a></li>
                    <li><a><span>Projects</span></a></li>
                    <li><a><span>Contact</span></a></li>
                </ul>
            </div>
            <div className="navbar-menu">

            </div>


        </nav>
    );
};