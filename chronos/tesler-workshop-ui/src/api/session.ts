import {axiosGet, buildUrl} from '@tesler-ui/core'
import {LoginResponse} from '@tesler-ui/core/interfaces/session'
import axios from 'axios'

const __API__ = '/api/v1/'
const __AJAX_TIMEOUT__ = 900000
const __CLIENT_ID__: number = Date.now()

export const HEADERS = { 'Pragma': 'no-cache', 'Cache-Control': 'no-cache, no-store, must-revalidate' }

export function getBasicAuthRequest(login?: string, password?: string) {
    const hash = new Buffer(`${login}:${password}`).toString('base64')
    const tzOffset = -(new Date()).getTimezoneOffset() * 60
    const entrypointUrl = `/${window.location.hash}`
    return axiosGet<LoginResponse>(
        buildUrl`login?_tzoffset=${tzOffset}&_entrypointUrl=${entrypointUrl}`,
        { headers: { Authorization: `Basic ${hash}` } }
    )
}

export function logout() {
    return axiosGet(buildUrl`logout`)
}

export const axiosInstance = axios.create({
    baseURL: __API__,
    timeout: __AJAX_TIMEOUT__,
    responseType: 'json',
    headers: {
        ...HEADERS,
        ...{ClientId : __CLIENT_ID__},
    }
})
