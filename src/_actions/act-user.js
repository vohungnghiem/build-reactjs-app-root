import { USER } from '../_constants/types';
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
export const requestEditUser = (payload) => {
    return {
        type: USER.REQUEST_EDIT,
        payload: payload,
    }
}
export const responseEditUser = (payload) => {
    return {
        type: USER.RESPONSE_EDIT,
        payload: payload
    }
}
export const requestDeleteUser = (payload) => {
    return {
        type: USER.REQUEST_DELETE,
        payload: payload,
    }
}
export const responseDeleteUser = (payload) => {
    return {
        type: USER.RESPONSE_DELETE,
        payload: payload
    }
}
export const requestOne = (payload) => {
    return {
        type: USER.REQUEST_ONE,
        payload: payload
    }
}
export const responseOne = (payload) => {
    return {
        type: USER.RESPONSE_ONE,
        payload: payload
    }
}
export const error = (payload) => {
    return {
        type: USER.ERROR,
        payload: payload
    }
}
export const success = (payload) => {
    return {
        type: USER.SUCCESS,
        payload: payload
    }
}
export const requestSearch = (payload) => {
    return {
        type: USER.REQUEST_SEARCH,
        payload: payload
    }
}
export const responseSearch = (payload) => {
    return {
        type: USER.RESPONSE_SEARCH,
        payload: payload
    }
}
