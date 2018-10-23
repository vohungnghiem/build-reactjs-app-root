import { combineReducers } from 'redux';
import signup from '../_reducers/reducer_signup';
import login from '../_reducers/reducer_login';
import user from '../_reducers/reducer_user';
import category from '../_reducers/reducer_category';
import product from '../_reducers/reducer_product';
const rootReducer = combineReducers({
    signup: signup,
    login: login,
    user: user,
    category,
    product
});
export default rootReducer;