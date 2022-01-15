import React, { useState, useEffect } from "react";
import { ImageProfile } from "../components/ImageProfile";
import { ProfileDetails } from "../components/ProfileDetails";
import "./StudentProfile.css";
import "./Common.css";
import { useParams } from "react-router-dom";
import { StudentService } from "../services/StudentService";

const studentInitialData: IStudent = {
    student_id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    profile_image: ""
}

export const StudentProfile: React.FC<{}> = () => {
    const params = useParams();
    const student_id = '' + params.student_id;

    const [student, setStudent] = useState<IStudent>(studentInitialData); 

    useEffect(() => {
        const fetchData = async() => {
            try {
                const {data: response } = await StudentService.getStudent(student_id);
                setStudent(response);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [student_id]);

    return (    
    <div className="content">
        <ImageProfile profile_image={student.profile_image} 
        full_name={student.last_name + ", " + student.first_name + " " + student.middle_name[0]}/>
        <ProfileDetails student={student} />
    </div>
    );
}

