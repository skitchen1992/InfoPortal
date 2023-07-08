export interface IError {
    message: string;
}
export interface ILoginState {
    userName: string | null
    password: string| null;
    isLoading: boolean;
    error?: string| null;
}
