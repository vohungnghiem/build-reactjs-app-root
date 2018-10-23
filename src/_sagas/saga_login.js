import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { LOGIN } from '../_constants/types';
import { success, error } from '../_actions/act_login';
async function apiLoginAdmin(payload) {
  try {
    const response = await axios.get('https://5b31e1e07ad3350014b4349a.mockapi.io/api/users');
    let result = '';
    for(let call of response.data)
    {
        let elementemail = call['email'];
        let elementlevel = call['level'];
        let elementpassword = call['password'];
        if(
            elementemail === payload.email 
            && elementlevel === true
            && bcrypt.compareSync(payload.password, elementpassword) === true
        ){
            result = call;
        }
    }
    return result;
  } 
  catch (error) {
    console.log(error);
  }
}
export function* sagaLoginAdmin(payload){
    try {
        if (payload.payload.email) {
            let array = yield call(apiLoginAdmin, payload.payload);
            if(array){
                
                yield put(success({successlogin: 'success!'}));
                localStorage.setItem('loginAdmin', array.token);
            }else{
                yield put(error({error: 'error!'}));
            }
        } else {
            yield put(error({error: 'error!'}));
        }
    } catch (error) {
        console.log(error);
    }
}
async function apiLogin(payload) {
    try {
      const response = await axios.get('https://5b31e1e07ad3350014b4349a.mockapi.io/api/users');
      let result = '';
      for(let call of response.data)
      {
          let elementemail = call['email'];
          let elementpassword = call['password'];
          if(
              elementemail === payload.email 
              && bcrypt.compareSync(payload.password, elementpassword) === true
          ){
              result = call;
          }
      }
      return result;
    } 
    catch (error) {
      console.log(error);
    }
  }
export function* sagaLogin(payload){
    try {
        if (payload.payload.email) {
            let array = yield call(apiLogin, payload.payload);
            if(array){
                
                yield put(success({successlogin: 'success!'}));
                localStorage.setItem('login', array.token);
            }else{
                yield put(error({error: 'error!'}));
            }
        } else {
            yield put(error({error: 'error!'}));
        }
    } catch (error) {
        console.log(error);
    }
}
export default function* loginAdmin() {
  yield takeEvery(LOGIN.REQUEST_ADMIN, sagaLoginAdmin);
  yield takeEvery(LOGIN.REQUEST_LOGIN,sagaLogin);
}