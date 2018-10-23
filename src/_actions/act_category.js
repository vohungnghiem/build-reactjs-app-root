import { CAT } from '../_constants/types';
export const requestAll = () => {
    return {
        type: CAT.REQUEST_ALL
    }
}
export const responseAll = (payload) => {
    return {
        type:CAT.RESPONSE_ALL,
        payload: payload
    }
}
export const requestAdd = (payload) => {
    return {
        type: CAT.REQUEST_ADD,
        payload: payload,
    }
}
export const responseAdd = (payload) => {
    return {
        type: CAT.RESPONSE_ADD,
        payload: payload
    }
}
export const requestEdit = (payload) => {
    return {
        type: CAT.REQUEST_EDIT,
        payload: payload,
    }
}
export const responseEdit = (payload) => {
    return {
        type: CAT.RESPONSE_EDIT,
        payload: payload
    }
}
export const requestDelete = (payload) => {
    return {
        type: CAT.REQUEST_DELETE,
        payload: payload,
    }
}
export const responseDelete = (payload) => {
    return {
        type: CAT.RESPONSE_DELETE,
        payload: payload
    }
}
export const requestOne = (payload) => {
    return {
        type: CAT.REQUEST_ONE,
        payload: payload
    }
}
export const responseOne = (payload) => {
    return {
        type: CAT.RESPONSE_ONE,
        payload: payload
    }
}
export const error = (payload) => {
    return {
        type: CAT.ERROR,
        payload: payload
    }
}
export const success = (payload) => {
    return {
        type: CAT.SUCCESS,
        payload: payload
    }
}
export const requestSearch = (payload) => {
    return {
        type: CAT.REQUEST_SEARCH,
        payload: payload
    }
}
export const responseSearch = (payload) => {
    return {
        type: CAT.RESPONSE_SEARCH,
        payload: payload
    }
}
