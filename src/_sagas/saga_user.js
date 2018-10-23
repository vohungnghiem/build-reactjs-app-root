import { put, takeEvery, call } from 'redux-saga/effects';
import { USER } from '../_constants/types';
import { responseAll, success, error, responseSearch } from '../_actions/act-user';
import { apiGetAllUser, apiEditUser, apiDeleteUser} from '../_apis/api_user';
import { apiAddImage } from '../_apis/api_signup'; 
export function* sagaGetAllUser(){
    let data = yield call(apiGetAllUser);
    yield put(responseAll(data));
}
export function* sagaEditUser(payload){
  let { fullname, telephone, address, gender } = payload.payload.fields;
  let avatar = payload.payload.temporary_avatar;
  let id = payload.payload.id;
  let data = { fullname, telephone, address, gender }
  if (avatar) {
    let avatart = yield call(apiAddImage,payload.payload.fields.avatar);
    data = Object.assign(data, { 
      avatar: avatart.directAvatar,
    });
  }
  let callEditUser = yield call(apiEditUser,id,data);
  if (callEditUser) {
    yield put(success({ success: 'success!'}));
  } else {
    yield put(error({ error: 'error!'}));
  }  
}
export function* sagaDeleteUser(payload){
  yield call(apiDeleteUser,payload.payload);
  let data = yield call(apiGetAllUser);
    yield put(responseAll(data));
}
export function* sagaSearchUser(payload){
  if (payload.payload) {
    let datas = yield call(apiGetAllUser);
    let result = datas.filter(data => 
      data.username.toLowerCase().indexOf(payload.payload.toLowerCase()) > -1)
    yield put(responseSearch(result));
  }else{
    let data = yield call(apiGetAllUser);
    yield put(responseAll(data));
  }
}
export default function* user() {
  yield takeEvery(USER.REQUEST_ALL, sagaGetAllUser);
  yield takeEvery(USER.REQUEST_EDIT, sagaEditUser);
  yield takeEvery(USER.REQUEST_DELETE, sagaDeleteUser);
  yield takeEvery(USER.REQUEST_SEARCH, sagaSearchUser);
}