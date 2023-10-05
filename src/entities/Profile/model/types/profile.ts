import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export enum validateErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    first?: string,
    lastname?: string,
    age?: string,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}
export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoad: boolean,
    error?: string,
    readonly: boolean,
    validateProfileErrors?: validateErrors[]
}
