import { all, fork } from 'redux-saga/effects';
import signup from '../_sagas/saga_signup'; 
import login from '../_sagas/saga_login';
import user from '../_sagas/saga_user';
import category from '../_sagas/saga_category';
import product from '../_sagas/saga_product';
export default function* rootSaga(){
    yield all([
        fork(signup),
        fork(login),
        fork(user),
        fork(category),
        fork(product)
    ])
}