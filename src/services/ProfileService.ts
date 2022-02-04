import http from "./http-common";

const getStudent = async (id: string) => {
    const {data} = await http.get<IProfile>(`/student/${id}`);
    return data;
}

const getTeacher = async (id: string) => {
    const {data} = await http.get<IProfile>(`/teacher/${id}`);
    return data;
}

const createStudent = async (profile: IProfile) => {
    const {data} = await http.post<IProfile>('/student', profile);
}

const createTeacher = async (profile: IProfile) => {
    console.log(profile)
    const {data} = await http.post<IProfile>('/teacher', profile);
}

export const ProfileService = {
    getStudent,
    getTeacher,
    createStudent,
    createTeacher,
};