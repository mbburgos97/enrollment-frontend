import http from "../http-common";

const getStudent = (id: string) => {
    return http.get<IStudent>(`/student/${id}`);
}

export const StudentService = {
    getStudent,
};

