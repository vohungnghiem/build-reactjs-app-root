import { SIGN_UP} from '../_constants/types';
let initState = []
export default function signUp(state = initState, payload) {
    switch (payload.type) {
        case SIGN_UP.RESPONSE_ALL:
            state = payload.payload;
            return state;
        case SIGN_UP.SUCCESS:
            state = payload.payload;
            return state;
        case SIGN_UP.ERROR:
            state = payload.payload; 
            return state;
        default:
            return state;
    }
}