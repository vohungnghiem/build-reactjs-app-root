import { USER} from '../_constants/types';
let initState = []
export default function user(state = initState, payload) {
    switch (payload.type) {
        case USER.RESPONSE_ONE:
            state = payload.payload;
            return state;
        case USER.RESPONSE_ALL:
            state = payload.payload;
            return state;
        case USER.RESPONSE_DELETE:
            state = payload.payload;
            return state;
        case USER.SUCCESS:
            state = payload.payload;
            return state;
        case USER.ERROR:
            state = payload.payload;
            return state;
        case USER.RESPONSE_SEARCH:
            state = payload.payload;
            return state;
        default:
            return state;
    }
}