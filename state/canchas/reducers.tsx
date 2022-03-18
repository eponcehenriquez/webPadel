import {
    CANCHAS_SELECT_DAY,
    // CANCHAS_CREATE_FAIL,
    // CANCHAS_CREATE_REQUEST,
    // CANCHAS_CREATE_SUCCESS,
    CANCHAS_LIST_FAIL,
    CANCHAS_LIST_REQUEST,
    CANCHAS_LIST_SUCCESS,
    // CANCHAS_DELETE_FAIL,
    // CANCHAS_DELETE_REQUEST,
    // CANCHAS_DELETE_SUCCESS,
    // CANCHAS_UPDATE_FAIL,
    // CANCHAS_UPDATE_REQUEST,
    // CANCHAS_UPDATE_SUCCESS
} from './types'


const initialState = {
    canchas: [],
    loading: false,
    error: false
}


/**
 * Reducer encargado de crear cancha
 * @param state {}
 * @param action Typo de Accion
 * @returns Estado modificado
 */
// export const canchaCreateReducer = (state = {}, action) => {
//     switch (action.type) {
//         case CANCHAS_CREATE_REQUEST:
//             return {...state, loading: true}

//         case CANCHAS_CREATE_FAIL:
//             return {...state, loading: false, error: true}

//         case CANCHAS_CREATE_SUCCESS:
//             return {...state, loading: false, error: null}

//         default:
//             return state
//     }
// }


/**
 * Reducer encargado de listar cancha
 * @param state initialState
 * @param action Typo de Accion
 * @returns Estado modificado
 */
export const canchaListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CANCHAS_LIST_REQUEST:
            return {...state, loading: true}


        case CANCHAS_LIST_FAIL:
            return {...state, loading: false, error: true}


        case CANCHAS_LIST_SUCCESS:
            return {...state, loading: false, error: null, canchas: action.payload}


        case CANCHAS_SELECT_DAY:
            const arr = state.canchas.map((cancha) => {
                if (cancha.id !== action.payload.cancha.id) return cancha
                return {
                    ...cancha,
                    ...action.payload.data
                }
            })

            return {
                ...state,
                canchas: arr
            }

        default:
            return state
    }
}


/**
 * Reducer encargado de actualizar cancha
 * @param state {}
 * @param action Typo de Accion
 * @returns Estado modificado
 */
// export const canchaUpdateReducer = (state = {}, action) => {
//     switch (action.type) {
//         case CANCHAS_UPDATE_REQUEST:
//             return {...state, loading: true}

//         case CANCHAS_UPDATE_FAIL:
//             return {...state, loading: false, error: true}

//         case CANCHAS_UPDATE_SUCCESS:
//             return {...state, loading: false, error: null}

//         default:
//             return state
//     }
// }


/**
 * Reducer encargado de eliminar cancha
 * @param state {}
 * @param action Typo de Accion
 * @returns Estado modificado
 */
// export const canchaDeleteReducer = (state = {}, action) => {
//     switch (action.type) {
//         case CANCHAS_DELETE_REQUEST:
//             return {...state, loading: true}

//         case CANCHAS_DELETE_FAIL:
//             return {...state, loading: false, error: true}

//         case CANCHAS_DELETE_SUCCESS:
//             return {...state, loading: false, error: null}

//         default:
//             return state
//     }
// }