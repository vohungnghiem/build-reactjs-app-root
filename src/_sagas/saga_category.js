import { put, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { CAT } from '../_constants/types';
import { responseAll,responseOne ,responseAdd, responseDelete, responseEdit } from '../_actions/act_category';
import { apiAdd, apiAll, apiDelete, apiOne, apiEdit } from '../_apis/api_category';
import { ChangeToSlug } from '../_helpers/index';

//add
export function* sagaGetAdd(payload){
  let sentData = Object.assign(payload.payload, 
    { slug: ChangeToSlug(payload.payload.title) });
  let getData = yield call(apiAdd, sentData);
  if (getData) {
    yield put(responseAdd({success: 'import success!'}))
  } else {
    yield put(responseAdd({error: 'import error!'}))
  }
  yield call(delay, 2000)
  getData = yield call(apiAll);
  yield put(responseAll(getData))
}
//all
export function* sagaGetAll(){
  let getData = yield call(apiAll);
  yield put(responseAll(getData))
}
//delete
export function* sagaGetDelete(payload) {
  let sentData = payload.payload
  let getData = yield call(apiDelete,sentData);
  if (getData) {
    yield put(responseDelete({success: 'delete success!'}))
  } else {
    yield put(responseDelete({error: 'delete error!'}))
  }
  yield call(delay, 2000)
  getData = yield call(apiAll);
  yield put(responseAll(getData))
}
//one
export function* sagaGetOne(payload){
  let getOne = yield call(apiOne, payload.payload);
  let getAll = yield call(apiAll);
  yield put(responseOne({one:getOne,all:getAll, edit: true}))
}
//edit
export function* sagaGetEdit(payload){
  let title = payload.payload.title;
  let slug = ChangeToSlug(payload.payload.title);
  let parent = null;
  if (payload.payload.parent === "0") {
    parent = 0;
  } else {
    parent = payload.payload.parent;
  }
  let sentData = {title, slug, parent}
  // Object.assign(payload.payload, { slug: ChangeToSlug(payload.payload.title) });
  let id = payload.payload.id;
  let getData = yield call(apiEdit,id,sentData);
  if (getData) {
    yield put(responseEdit({success: 'import success!'}))
  } else {
    yield put(responseEdit({error: 'import error!'}))
  }
  yield call(delay, 2000)
  getData = yield call(apiAll);
  yield put(responseAll(getData))
}
//root
export default function* category() {
  yield takeEvery(CAT.REQUEST_ADD, sagaGetAdd);
  yield takeEvery(CAT.REQUEST_ALL, sagaGetAll);
  yield takeEvery(CAT.REQUEST_DELETE, sagaGetDelete);
  yield takeEvery(CAT.REQUEST_ONE, sagaGetOne);
  yield takeEvery(CAT.REQUEST_EDIT, sagaGetEdit);
}