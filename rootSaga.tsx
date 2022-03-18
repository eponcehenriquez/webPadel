import { fork } from 'redux-saga/effects'
import { CanchaWatcher } from './state/canchas/sagas'


function* rootSaga() {
    yield fork(CanchaWatcher)
}


export default rootSaga

