import { LOGIN, USER } from '../_constants/types';
let initState = []
export default function login(state = initState, payload) {
    switch (payload.type) {
        case USER.RESPONSE_ALL:
            state = payload.payload;
            return state;
        case LOGIN.SUCCESS_ADMIN:
            state = payload.payload;
            return state;
        case LOGIN.ERROR_ADMIN:
            state = payload.payload; 
            return state;
        default:
            return state;
    }
}