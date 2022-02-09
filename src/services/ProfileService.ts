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
    return data;
}

const createTeacher = async (profile: IProfile) => {
    const {data} = await http.post<IProfile>('/teacher', profile);
    return data;
}

const patchStudent = async (id: string, profile: IPatchProfile) => {
    const {data} = await http.patch<IProfile>(`/student/${id}`, profile);
    return data;
}

const patchTeacher = async (id: string, profile: IPatchProfile) => {
    const {data} = await http.patch<IProfile>(`/teacher/${id}`, profile);
    return data;
}

export const ProfileService = {
    getStudent,
    getTeacher,
    createStudent,
    createTeacher,
    patchStudent,
    patchTeacher
};