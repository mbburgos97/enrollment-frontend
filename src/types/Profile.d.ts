interface IProfile {
    id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    profile_image: string;
    password?: string;
    email: string;
    username: string;
    contact_number: string;
    nickname: string;
}

interface IPatchProfile {
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    profile_image?: string;
    password?: string;
    email?: string;
    username?: string;
    contact_number?: string;
    nickname?: string;
}