import http from "./http-common";

const getStudent = async (id: string) => {
    const {data} = await http.get<IProfile>(`/student/${id}`);
    return data;
}

export const StudentService = {
    getStudent,
};