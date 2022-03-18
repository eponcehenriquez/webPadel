import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    STORED_BASKET,
    EMPTY_BASKET
} from './types'


export const EmptyBasket = () => ({
    type: EMPTY_BASKET
})


export const StoredBasket = (data) => ({
    type: STORED_BASKET,
    payload: data
})


export const AddToBasket = (data) => ({
    type: ADD_TO_BASKET,
    payload: data
})


export const RemoveFromBasket = (data) => ({
    type: REMOVE_FROM_BASKET,
    payload: data
})


export const getBasketTotal = (basket) => basket?.reduce((precio, item) => item.precio + precio, 0)