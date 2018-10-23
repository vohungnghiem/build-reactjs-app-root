import { PRODUCT } from '../_constants/types';
let initState = []
export default function product(state = initState, payload) {
    switch (payload.type) {
        case PRODUCT.RESPONSE_ALL:
            state = payload.payload;
            return state;
        case PRODUCT.RESPONSE_ONE:
            state = payload.payload;
            return state;
        case PRODUCT.RESPONSE_ADD:
            state = payload.payload;
            return state;
        case PRODUCT.RESPONSE_EDIT:
            state = payload.payload;
            return state;
        case PRODUCT.RESPONSE_DELETE:
            state = payload.payload;
            return state;
        case PRODUCT.SUCCESS:
            state = payload.payload;
            return state;
        case PRODUCT.ERROR:
            state = payload.payload;
            return state;
        case PRODUCT.RESPONSE_SEARCH:
            state = payload.payload;
            return state;
        default:
            return state;
    }
}