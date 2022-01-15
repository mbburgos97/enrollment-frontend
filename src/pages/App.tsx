import React from 'react';
import './Common.css';
import { NavBar } from '../components/NavBar';
import { Route, Routes } from "react-router-dom";
import { EntryPage } from "./EntryPage";
import { StudentProfile } from "./StudentProfile";

function App() {
  return (
    <div className="page">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/student/:student_id" element={<StudentProfile />} />
      </Routes>
    </div>
  );
}

export default App;
