import { SIGN_UP } from '../_constants/types';
export const requestAll = () => {
    return {
        type: SIGN_UP.REQUEST_ALL
    }
}
export const responseAll = (payload) => {
    return {
        type: SIGN_UP.RESPONSE_ALL,
        payload: payload
    }
}
export const request = (payload) => {
    return {
        type: SIGN_UP.REQUEST,
        payload: payload
    }
}
export const success = (payload) => {
    return {
        type: SIGN_UP.SUCCESS,
        payload: payload
    }
}
export const error = (payload) => {
    return {
        type: SIGN_UP.ERROR,
        payload
    }
}
