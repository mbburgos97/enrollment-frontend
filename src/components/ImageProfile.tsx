import React from "react";
import './ImageProfile.css';

interface Props {
    profile_image: string;
    full_name: string;
}

export const ImageProfile: React.FC<Props> = ({profile_image, full_name}) => {
    return (
        <div className="profile-wrapper">
            <h2>{full_name}.</h2>
            <img className="profile-image" src={profile_image} alt="profile_picture.png" />
            <button>Upload Photo</button>
        </div>
    );
}