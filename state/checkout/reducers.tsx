import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
} from './types'


const initialState = {
    basket: []
}


/**
 * Reducer encargado de manejar el estado del carrito de compra, agregando y eliminando items
 * @param state initialState
 * @param action Typo de Accion
 * @returns Estado modificado
 */
export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }


        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: action.payload
            }
            

        default:
            return state
    }
}