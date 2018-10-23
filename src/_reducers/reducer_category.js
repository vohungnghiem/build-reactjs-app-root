import { CAT } from '../_constants/types';
let initState = []
export default function category(state = initState, payload) {
    switch (payload.type) {
        case CAT.RESPONSE_ALL:
            state = payload.payload;
            return state;
        case CAT.RESPONSE_ONE:
            state = payload.payload;
            return state;
        case CAT.RESPONSE_ADD:
            state = payload.payload;
            return state;
        case CAT.RESPONSE_EDIT:
            state = payload.payload;
            return state;
        case CAT.RESPONSE_DELETE:
            state = payload.payload;
            return state;
        case CAT.SUCCESS:
            state = payload.payload;
            return state;
        case CAT.ERROR:
            state = payload.payload;
            return state;
        default:
            return state;
    }
}