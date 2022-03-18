import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'
// import { SuccessAlert, ErrorAlert } from '../../utils/Alerts'
//import {  } from '../../api'

import {
    CANCHAS_CREATE_REQUEST,
    CANCHAS_DELETE_REQUEST,
    CANCHAS_LIST_REQUEST,
    CANCHAS_UPDATE_REQUEST
} from './types'

import {
    // CanchaCreateFail,
    // CanchaCreateSuccess,
    // CanchaDeleteFail,
    // CanchaDeleteSuccess,
    CanchaListFail,
    CanchaListSuccess,
    CanchaListRequest,
    // CanchaUpdateFail,
    // CanchaUpdateSuccess,
} from './actions'


export function* CanchaWatcher() {
    // yield takeLatest(CANCHAS_CREATE_REQUEST, CanchaCreate)
    // yield takeLatest(CANCHAS_DELETE_REQUEST, CanchaDelete)
    yield takeLatest(CANCHAS_LIST_REQUEST, CanchaList)
    // yield takeLatest(CANCHAS_UPDATE_REQUEST, CanchaUpdate)
}


function* CanchaCreate(action) {
    try {

//        yield call(,action.payload)
        // yield put(CanchaCreateSuccess())
        // yield call(SuccessAlert, 'Creado')
        yield put(CanchaListRequest())
    } catch (error) {
        // yield put(CanchaCreateFail())
        // yield call(ErrorAlert, error.message)
    }
}


function* CanchaList() {
    try {
        const data = yield call(axios.get, `${process.env.API}/canchas`)
        const canchas = data.data

        const today = new Date()
        const date  = today
        const day   = today.getDate()
        const month = today.getMonth() + 1
        const year  = today.getFullYear()

        const canchasFormated = canchas.map((cancha) => ({
            ...cancha,
            date,
            day,
            month,
            year
        }))
        yield put(CanchaListSuccess(canchasFormated))
    } catch (error) {
        yield put(CanchaListFail())
        // yield call(ErrorAlert, error.message)
    }
}


function* CanchaUpdate(action) {
    try {

        // yield call(SuccessAlert, 'Actualizado')
        // yield put(CanchaUpdateSuccess())
    } catch (error) {
        // yield put(CanchaUpdateFail())
        // yield call(ErrorAlert, error.message)
    }
}


function* CanchaDelete(action) {
    try {

        // yield call(SuccessAlert, 'Eliminado')
        // yield put(CanchaDeleteSuccess())
    } catch (error) {
        // yield put(CanchaDeleteFail())
        // yield call(ErrorAlert, error.message)
    }
}