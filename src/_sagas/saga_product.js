import { put, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { PRODUCT } from '../_constants/types';
import { responseAll,responseOne ,responseAdd, responseDelete, responseEdit, responseSearch } from '../_actions/act_product';
import { apiAdd, apiAll, apiDelete, apiOne, apiEdit, apiAddImage } from '../_apis/api_product';
import { ChangeToSlug } from '../_helpers/index';
//add
export function* sagaAdd(payload){
  let url_image = null;
  if(payload.payload.image){
    url_image = yield call(apiAddImage,payload.payload.image);
  }
  let sentData = Object.assign(payload.payload, 
    { 
      slug: ChangeToSlug(payload.payload.name),
      image: url_image,
      create_date: Date.now()
    });
  let getData = yield call(apiAdd, sentData);
  if (getData) {
    yield put(responseAdd({success: 'import success!'}))
  } else {
    yield put(responseAdd({error: 'import error!'}))
  }
}
//all
export function* sagaAll(){
  let getData = yield call(apiAll);
  yield put(responseAll(getData))
}
//delete
export function* sagaDelete(payload) {
  let sentData = payload.payload
  let getData = yield call(apiDelete,sentData);
  if (getData) {
    yield put(responseDelete({success: 'delete success!'}))
  } else {
    yield put(responseDelete({error: 'delete error!'}))
  }
  yield call(delay, 500)
  getData = yield call(apiAll);
  yield put(responseAll(getData))
}
//one
export function* sagaOne(payload){
  let getData = yield call(apiOne, payload.payload);
  yield put(responseOne(getData))
}
//edit
export function* sagaEdit(payload){
  
  Object.assign(payload.payload.fields, { slug: ChangeToSlug(payload.payload.fields.name) });
  let sentData = payload.payload.fields
  let id = payload.payload.fields.id;
  if (payload.payload.temporary_image) {
    let imaget = yield call(apiAddImage,payload.payload.fields.image);
    sentData = Object.assign(sentData, { 
      image: imaget,
    });
  }
  let getData = yield call(apiEdit,id,sentData);
  if (getData) {
    yield put(responseEdit({success: 'edit success!'}))
  } else {
    yield put(responseEdit({error: 'edit error!'}))
  }
}
//search
export function* sagaSearch(payload){
  if (payload.payload) {
    let datas = yield call(apiAll);
    let result = datas.filter(data => 
      data.name.toLowerCase().indexOf(payload.payload.toLowerCase()) > -1)
    yield put(responseSearch(result));
  }else{
    let data = yield call(apiAll);
    yield put(responseAll(data));
  }
}
//root
export default function* category() {
  yield takeEvery(PRODUCT.REQUEST_ALL, sagaAll);
  yield takeEvery(PRODUCT.REQUEST_SEARCH, sagaSearch);
  yield takeEvery(PRODUCT.REQUEST_ADD, sagaAdd);
  yield takeEvery(PRODUCT.REQUEST_DELETE, sagaDelete);
  yield takeEvery(PRODUCT.REQUEST_ONE, sagaOne);
  yield takeEvery(PRODUCT.REQUEST_EDIT, sagaEdit)
}