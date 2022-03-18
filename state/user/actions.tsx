import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from './types'


export const LoginFail = () => ({
    type: LOGIN_FAIL,
})


export const LoginRequest = () => ({
    type: LOGIN_REQUEST,
})


export const LoginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
})


export const LogoutFail = () => ({
    type: LOGOUT_FAIL,
})


export const LogoutRequest = () => ({
    type: LOGOUT_REQUEST,
})


export const LogoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
})