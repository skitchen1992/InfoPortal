import { COUNTRY, CURRENCY } from 'shared/consts/consts';

export interface IProfile {
    first_name: string,
    last_name: string,
    age: number,
    city: string,
    country: COUNTRY,
    currency: CURRENCY,
    user_name: string,
    avatar: string,
}

export interface IProfileState {
    data: IProfile | null,
    loading: boolean,
    error: string | null,
    readonly: boolean
}
