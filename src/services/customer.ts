import {fetch} from 'api/config'

export async function getCustomer(): Promise<any> {
    return fetch({
        method: 'get',
        url: '/data'
    })
}