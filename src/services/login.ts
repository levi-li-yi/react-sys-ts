import {fetch} from 'api/config'

export interface LoginParamsType {
    userName: string;
    password: string;
    phoneNumber?: string;
}

export async function login(params: LoginParamsType): Promise<any> {
    return fetch({
        method: 'post',
        url: '/login',
        data: params
    })
}