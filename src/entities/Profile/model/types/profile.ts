import { COUNTRY, CURRENCY } from 'shared/consts/consts';

export interface IProfile {
    first_name?: string,
    last_name?: string,
    age?: string,
    city?: string,
    country?: COUNTRY,
    currency?: CURRENCY,
    user_name?: string,
    avatar?: string,
}

export interface IProfileState {
    data: IProfile | null,
    form: IProfile | null,
    hasData: boolean,
    isLoading: boolean,
    error: string | null,
    readOnly: boolean
}
