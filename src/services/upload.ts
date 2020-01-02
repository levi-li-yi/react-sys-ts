import {fetch, requestType} from 'api/config'

export async function uploadFile(postData: requestType): Promise<any> {
    return fetch(postData)
}