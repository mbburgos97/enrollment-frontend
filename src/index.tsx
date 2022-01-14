import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import LandingPage from './pages/LandingPage';
import { StudentProfile } from './pages/StudentProfile';

const student: Student = {
  student_id: "2013-09836",
  first_name: "Josh",
  middle_name: "Bucad",
  last_name: "Burgos",
  profile_image: "https://i.ibb.co/Sf7XVDn/profile-pic.jpg"
}

ReactDOM.render(
  <React.StrictMode>
    <StudentProfile student={student} />
  </React.StrictMode>,
  document.getElementById('root')
);