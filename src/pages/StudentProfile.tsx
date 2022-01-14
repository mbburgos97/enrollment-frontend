import React from "react";
import { NavBar } from "../components/NavBar";
import { ImageProfile } from "../components/ImageProfile";
import { ProfileDetails } from "../components/ProfileDetails";
import "./StudentProfile.css";
import "./Common.css";

interface Props {
    student: Student;
}

export const StudentProfile: React.FC<Props> = ({student}) => {
    return (
    <div className="page">
        <NavBar />
        <div className="content">
            <ImageProfile profile_image={student.profile_image} 
            full_name={student.last_name + ", " + student.first_name + " " + student.middle_name[0]}/>
            <ProfileDetails student={student} />
        </div>
    </div>
    );
}

