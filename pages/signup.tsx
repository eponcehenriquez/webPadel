import { memo } from 'react'
import axios from 'axios'
import { config } from '../utils/axios-config'


export default memo(() => {
    const registrar = async () => {
        const res = await axios.post(
            `${process.env.API}/auth/create-user-admin`,
            { username: 'pio', password: '1234' },
            config
        )
        console.log(res.data)
    }
    

    return(
        <div>
            <button onClick={() => registrar()}>Registrar Admin</button>
        </div>
    )
})