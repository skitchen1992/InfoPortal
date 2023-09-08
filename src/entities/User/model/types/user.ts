export interface IUser {
    id: string
    userName: string
    avatar?: string;
}

export interface IUserState {
    authData?: IUser

    _initialized?: boolean
}
