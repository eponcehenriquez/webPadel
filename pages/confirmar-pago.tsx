import { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { config } from '../utils/axios-config'
import css from 'styled-jsx/css'


const Styles = css`
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}


.card {
    box-shadow: -8px -8px 15px #2F3034, 8px 8px 15px #191A1E;
    border-radius: 20px;
    padding: 40px;
    color: white;
    font-family: roboto;
    font-size: 18px;
}


.titulo {
    margin-bottom: 20px;
}
`


export default memo(() => {
    const router = useRouter()
    const { token_ws } = router.query
    const [PeticionRealizada, setPeticionRealizada] = useState(false)
    const [PagoAprovado, setPagoAprovado] = useState(false)
    const [TransactionInfo, setTransactionInfo] = useState<any>({})


    const pagar = async () => {
        try {
            const url = `${process.env.API}/verificar`
            const token = token_ws
            const res = await axios.post(url, { token }, config)
            const data = res.data
            const {
                response_code,
                status,
            } = data

            if (response_code === 0 && status === "AUTHORIZED") setPagoAprovado(true)
            else setPagoAprovado(false)

            console.table(data)

            setTransactionInfo(data)
            setPeticionRealizada(true)
        } catch (error) {
            console.error(error.message)
        }
    }

    
    useEffect(() => {
        if (token_ws) pagar()
    }, [token_ws])
    

    return (
        <div className='container'>
            <style jsx>{Styles}</style>

            <div className="card">            
                {PeticionRealizada ? (
                    <div>
                        {PagoAprovado ? (
                            <div>
                                <p className='titulo'>Pago Aprovado</p>
                                <p>status: {TransactionInfo?.status}</p>
                                <p>buy_order: {TransactionInfo?.buy_order}</p>
                                <p>session_id: {TransactionInfo?.session_id}</p>
                                <p>amount: {TransactionInfo?.amount}</p>
                                <p>transaction_date: {TransactionInfo?.transaction_date}</p>
                                <p>response_code: {TransactionInfo?.response_code}</p>
                                <p>etc...</p>
                            </div>
                        ) : (
                            <div>Pago Rechazado</div>
                        )}
                    </div>
                ) : (
                    <div>cargando...</div>
                )}
            </div>
        </div>
    )
})