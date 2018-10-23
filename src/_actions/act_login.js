import { LOGIN, USER } from '../_constants/types';
export const requestAll = () => {
    return {
        type: USER.REQUEST_ALL
    }
}
export const responseAll = (payload) => {
    return {
        type: USER.RESPONSE_ALL,
        payload: payload
    }
}
export const request = (payload) => {
    return {
        type: LOGIN.REQUEST_ADMIN,
        payload: payload
    }
}
export const success = (payload) => {
    return {
        type: LOGIN.SUCCESS_ADMIN,
        payload: payload
    }
}
export const error = (payload) => {
    return {
        type: LOGIN.ERROR_ADMIN,
        payload
    }
}
export const requestLogin = (payload) => {
    return {
        type: LOGIN.REQUEST_LOGIN,
        payload: payload
    }
}
