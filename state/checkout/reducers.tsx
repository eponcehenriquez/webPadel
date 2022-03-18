import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    STORED_BASKET
} from './types'
import Cookie from "js-cookie"


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
            const save = [...state.basket, action.payload]
            const saveString = JSON.stringify(save)
            Cookie.set("basket", saveString)
            
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }


        case STORED_BASKET:
            return {
                ...state,
                basket: [...state.basket, ...action.payload]
            }


        case REMOVE_FROM_BASKET:
            const bask = action.payload
            const saveBasket = JSON.stringify(bask)
            Cookie.set("basket", saveBasket)
            
            return {
                ...state,
                basket: action.payload
            }
            

        default:
            return state
    }
}