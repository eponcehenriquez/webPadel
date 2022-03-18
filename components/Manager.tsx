import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CanchaListRequest } from '../state/canchas/actions'


export default memo(() => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(CanchaListRequest())
    }, [])
    
    
    return null
})