import { takeLatest, put, call } from 'redux-saga/effects'
//import {  } from '../../api'

import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from './types'

import {

} from './actions'


export function* LoginWatcher() {
    yield takeLatest(LOGIN_REQUEST, Login)
    yield takeLatest(LOGOUT_REQUEST, Logout)
}


function* Login(action) {
    try {

//        yield call(,action.payload)
        // yield put(LoginCreateSuccess())
        // yield put(LoginListRequest())
    } catch (error) {
        // yield put(LoginCreateFail())
    }
}


function* Logout() {
    try {
//        const Login = yield call()
//        yield put(LoginListSuccess(Login))
    } catch (error) {
        // yield put(LoginListFail())
    }
}