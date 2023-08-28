import { COUNTRY, CURRENCY } from 'shared/consts/consts';

export enum VALIDATE_PROFILE_ERROR {
    REQUIRED_FIRST_NAME = 'label.required_first_name',
    REQUIRED_LAST_NAME = 'label.required_last_name',
    REQUIRED_AGE = 'label.required_age',
    REQUIRED_CITY = 'label.required_city',
}

export interface IErrorField{
    field: string,
    error?: VALIDATE_PROFILE_ERROR
}

export interface IErrorForm {
    [key: string]: IErrorField | undefined
}
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
    data: Nullable<IProfile>,
    form: Nullable<IProfile>,
    hasData: boolean,
    isLoading: boolean,
    error: Nullable<string>,
    readOnly: boolean
    validationError: IErrorForm[],
}
