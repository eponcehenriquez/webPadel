import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookie from "js-cookie"
import { CanchaListRequest } from '../state/canchas/actions'
import { StoredBasket } from '../state/checkout/actions'


export default memo(() => {
    const dispatch = useDispatch()


    useEffect(() => {
        const galleta = Cookie.get("basket")
        if (galleta) {
            const basket = JSON.parse(galleta)
            dispatch(StoredBasket(basket))
        }
        dispatch(CanchaListRequest())
    }, [])
    
    
    return null
})