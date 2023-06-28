export interface IError {
    message: string;
}
export interface ILoginSchema {
    userName: string | null
    password: string| null;
    isLoading: boolean;
    error?: string| null;
}
