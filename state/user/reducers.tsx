import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from './types'




const initialState = {
    user: null,
    loading: false,
    error: false
}


/**
 * Reducer encargado de User
 * @param state {}
 * @param action Typo de Accion
 * @returns Estado modificado
 */
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}

        case LOGIN_FAIL:
            return {...state, loading: false, error: true}

        case LOGIN_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload}

        case LOGOUT_REQUEST:
            return {...state, loading: true, error: null}

        case LOGOUT_FAIL:
            return {...state, loading: false, error: null}

        case LOGOUT_SUCCESS:
            return {...state, loading: false, error: null, user: null}

        default:
            return state
    }
}