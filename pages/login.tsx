import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginRequest } from '../state/user/actions'
import axios from 'axios'
import { config } from '../utils/axios-config'


export default memo(() => {
    const user = async () => {
        const res = await axios.get(
            `${process.env.API}/auth/user`,
            { withCredentials: true }
        )
        console.log(res.data)
    }


    const login = async () => {
        const res = await axios.post(
            `${process.env.API}/auth/login`,
            { username: 'pio', password: '1234' },
            config
        )
        console.log(res.data)
    }  


    const logout = async () => {
        const res = await axios.post(
            `${process.env.API}/auth/logout`,
            {  },
            config
        )
        console.log(res.data)
    }  


    useEffect(() => {
        // users()
    }, [])
    


    return(
        <div>
            <button onClick={() => login()}>login</button>
            <button onClick={() => user()}>leer usuario</button>
            <button onClick={() => logout()}>logout</button>
        </div>
    )
})