import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; 


export default function Navbar() {
    return (
        <div id="navbar">
            <div className="logo">
                <Link href="/">Budget Parts</Link>
            </div> 
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Contact</Link>
                <Link to="#">SignUp/SignIn</Link>
            </div>
        </div>
    );
}