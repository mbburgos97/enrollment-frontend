import http from "./http-common";

const getStudent = async (id: string) => {
    const {data} = await http.get<IProfile>(`/student/${id}`);
    return data;
}

const getTeacher = async (id: string) => {
    const {data} = await http.get<IProfile>(`/teacher/${id}`);
    return data;
}

export const ProfileService = {
    getStudent,
    getTeacher
};