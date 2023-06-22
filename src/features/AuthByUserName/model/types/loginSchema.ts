export interface IError {
    message: string;
}
export interface ILoginSchema {
    userName: string;
    password: string;
    isLoading: boolean;
    error?: string;
}
