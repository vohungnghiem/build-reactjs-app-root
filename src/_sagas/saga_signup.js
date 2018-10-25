import { put, takeEvery, call } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { success, error, responseAll } from '../_actions/act_signup';
import { SIGN_UP } from '../_constants/types';
import { apiSignUp, apiGetAllUsers, apiAddImage } from '../_apis/api_signup';
//sign up
export function* sagaSignUp(payload){
  let { username, fullname, password, email, telephone, address, gender } = payload.payload.fields;
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = (password) ? bcrypt.hashSync(password, salt): '';
  let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
  let getPayload = { 
    username: username, 
    fullname: fullname, 
    email: email, 
    telephone: telephone, 
    address: address, 
    gender: gender, 
    token: token,
    password: hashPassword
  }
  try {
    if(payload.payload.isValid){
      let directAvatar = '';
      let errorAvatar = '';
      if(payload.payload.fields.avatar){
        let callApiAddImage = yield call(apiAddImage,payload.payload.fields.avatar);
        directAvatar = callApiAddImage.directAvatar;
        errorAvatar = callApiAddImage.errorAvatar;
      }
      getPayload = Object.assign(getPayload, { 
        avatar: directAvatar,
        create_date: Date.now() 
      });
      const signUp = yield call(apiSignUp,getPayload);
      if (signUp.error || errorAvatar) {
        yield put(error({ 
          error: "upload data fail!",
          erroravatar: "upload avatar fail! "
        }));
      } else {
        yield put(success({ 
          success : 'Sign up success!',
          successstorage: signUp
        }));
        console.log(signUp);
      } 
    }
  } catch (error) {
    console.log(error)
  }
}

export function* sagaRequestAll(){
  let getData =  yield call(apiGetAllUsers);
  yield put(responseAll(getData))
}

export default function* signUp() {
  yield takeEvery(SIGN_UP.REQUEST, sagaSignUp);
  yield takeEvery(SIGN_UP.REQUEST_ALL, sagaRequestAll);
}