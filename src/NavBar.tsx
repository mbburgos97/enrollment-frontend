import React from 'react';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="logo-wrapper">
            <img className="logo" src={process.env.PUBLIC_URL + "/images/logo.png"} />
            <div className="navbar-title">
                <h3>Enrollment Landing Page</h3>
            </div>
            
            <div className="button-bar">
                <p className='button-text'>Login</p>
                <p className='button-text'>Sign up</p>
            </div>
            
            {/* <div>
                
            </div>
            <div>
                
            </div> */}
        </div>
    )
}