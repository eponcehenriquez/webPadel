import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
} from './types'


export const AddToBasket = (data) => ({
    type: ADD_TO_BASKET,
    payload: data
})


export const RemoveFromBasket = (data) => ({
    type: REMOVE_FROM_BASKET,
    payload: data
})


export const getBasketTotal = (basket) => basket?.reduce((precio, item) => item.precio + precio, 0)