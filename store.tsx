import { applyMiddleware, createStore, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import rootSaga from './rootSaga'
import { 
    checkoutReducer, 
    canchaListReducer
} from './state'


const rootReducer = combineReducers({
    checkoutReducer,
    canchaListReducer
})


const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}


export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware()
    const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]))

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}


export const wrapper = createWrapper(makeStore, { debug: true })