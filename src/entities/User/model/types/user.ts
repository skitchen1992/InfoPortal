export interface IUser {
    id: string
    username: string
    avatar?: string;
}

export interface IUserState {
    authData?: IUser

    _initialized?: boolean
}
