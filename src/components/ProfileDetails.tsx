import React from "react";
import "./ProfileDetails.css";

interface Props {
    student: IStudent;
}

export const ProfileDetails: React.FC<Props> = ({student}) => {
    return (
        <div className="profile-details">
            <div className="flexbox">
                <label className="normal">
                    Student ID:
                </label>
                <div className="stretch"><input type="text" placeholder={student.student_id} /></div>
            </div>
            <div className="flexbox">
                <label className="normal">
                    First Name:
                </label>
                <div className="stretch"><input type="text" placeholder={student.first_name} /></div>
            </div>
            <div className="flexbox">
                <label className="normal">
                    Middle Name: 
                </label>
                <div className="stretch"><input type="text" placeholder={student.middle_name} /></div>
            </div>
            <div className="flexbox">
                <label className="normal">
                    Last Name: 
                </label>
                <div className="stretch"><input type="text" placeholder={student.last_name} /></div>
            </div>
        </div>
    );
}