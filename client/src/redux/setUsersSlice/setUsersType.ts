export type UsersType = {
    id: string,
    name: string,
    email: string,
    access: boolean,
    lastName: string,
    birthDate: string,
}

export type UserSlice = {
    users: UsersType[],
}