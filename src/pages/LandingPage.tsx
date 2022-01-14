import React from 'react';
import './LandingPage.css';
import './Common.css';
import { NavBar } from '../components/NavBar';

function App() {
  return (
    <div className="page">
      <NavBar></NavBar>
      <div className="title-wrapper">
        <p className="subtitle">Sample Elementary</p>
        <h1>Welcome to Enrollment Project</h1>
        <button className="enroll-now-button">Enroll Now!</button>
      </div>
    </div>
  );
}

export default App;
