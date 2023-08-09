export interface IUser {
    id: string
    userName: string
}

export interface IUserState {
    authData?: IUser

    _initialized?: boolean
}
