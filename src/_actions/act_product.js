import { PRODUCT } from '../_constants/types';
export const requestAll = () => {
    return {
        type: PRODUCT.REQUEST_ALL
    }
}
export const responseAll = (payload) => {
    return {
        type:PRODUCT.RESPONSE_ALL,
        payload: payload
    }
}
export const requestAdd = (payload) => {
    return {
        type: PRODUCT.REQUEST_ADD,
        payload: payload,
    }
}
export const responseAdd = (payload) => {
    return {
        type: PRODUCT.RESPONSE_ADD,
        payload: payload
    }
}
export const requestEdit = (payload) => {
    return {
        type: PRODUCT.REQUEST_EDIT,
        payload: payload,
    }
}
export const responseEdit = (payload) => {
    return {
        type: PRODUCT.RESPONSE_EDIT,
        payload: payload
    }
}
export const requestDelete = (payload) => {
    return {
        type: PRODUCT.REQUEST_DELETE,
        payload: payload,
    }
}
export const responseDelete = (payload) => {
    return {
        type: PRODUCT.RESPONSE_DELETE,
        payload: payload
    }
}
export const requestOne = (payload) => {
    return {
        type: PRODUCT.REQUEST_ONE,
        payload: payload
    }
}
export const responseOne = (payload) => {
    return {
        type: PRODUCT.RESPONSE_ONE,
        payload: payload
    }
}
export const error = (payload) => {
    return {
        type: PRODUCT.ERROR,
        payload: payload
    }
}
export const success = (payload) => {
    return {
        type: PRODUCT.SUCCESS,
        payload: payload
    }
}
export const requestSearch = (payload) => {
    return {
        type: PRODUCT.REQUEST_SEARCH,
        payload: payload
    }
}
export const responseSearch = (payload) => {
    return {
        type: PRODUCT.RESPONSE_SEARCH,
        payload: payload
    }
}
