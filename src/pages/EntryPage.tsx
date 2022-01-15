import React from "react";
import "./EntryPage.css";
import { Link } from "react-router-dom";

export const EntryPage: React.FC<{}> = () => {
    return (
        <div className="title-wrapper">
            <p className="subtitle">Sample Elementary</p>
            <h1>Welcome to Enrollment Project</h1>
            <Link to="/student/2013-09836">
                <button className="enroll-now-button">Enroll Now!</button>
            </Link>
        </div>
    );
}