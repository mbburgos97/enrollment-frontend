import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="logo-wrapper">
            <Link to="/">
                <img className="logo" src={process.env.PUBLIC_URL + "/images/logo.png"} alt='Logo.png' />
            </Link>
            <div className="navbar-title">
                <h3>Sample Elementary School</h3>
            </div>
            
            <div className="button-bar">
                <p className='button-text'>Login</p>
                <p className='button-text'>Sign up</p>
            </div>
        </div>
    )
}