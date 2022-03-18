import { memo, useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import css from 'styled-jsx/css'
import axios from 'axios'
import { config } from '../../utils/axios-config'
import { 
    getBasketTotal, 
    EmptyBasket 
} from '../../state/checkout/actions'


const Total = css`
.total {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 40px;
}

.total h2 {
    color: #1A3150;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
}

.computo {
    border: 1px solid #dddddd;
    margin-bottom: 20px;
}

.boton {
    background-color: #96bd42;
    color: white;
    font-size: 13px;
    padding: 10px 100px;
    font-weight: 700;
    cursor: pointer;
    width: 400px;
    text-align: center;
    border: 1px solid #96bd42;
}
`


const Table = css`
table {
    width: 400px;
    border-spacing: 0;
}

th, td {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
}

th {
    font-weight: 400;
    font-size: 13px;
    color: #707276;
    padding: 6px;
}

td {
    font-weight: 400;
    font-size: 13px;
    padding: 9px 12px;
}

.sub {
    color: #222222;
}
`


const None = css`
.none {
    display: none
}
`


export default memo<any>(({basket}) => {
    const dispatch = useDispatch()
    const myForm = useRef(null);
    const [Token, setToken] = useState("")
    const [Url, setUrl] = useState("")
    const [Preparado, setPreparado] = useState(false)


    const pagar = async () => {
        try {            
            const res = await axios.post(
                `${process.env.API}/pago`,
                {basket},
                config
            )
            const data = res.data
            const token = data.token
            const url = data.url
            console.log(data)
            setToken(token)
            setUrl(url)
            setPreparado(true)
        } catch (error) {
            console.error(error.message)
        }
    }


    useEffect(() => {
        if (Preparado) {
            console.log("preparado")
            myForm.current.submit()
            // dispatch(EmptyBasket())
        }
    }, [Preparado, setPreparado, Url, Token])
    


    return(
        <div className="total">
            <style jsx>{Total}</style>
            <style jsx>{Table}</style>
            <style jsx>{None}</style>


            <h2>Precio Total</h2>

            <div className="computo">
                <table>
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td className='sub'>${getBasketTotal(basket)}</td>
                        </tr>
                        <tr>
                            <th>Total:</th>
                            <td>${getBasketTotal(basket)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="boton" onClick={() => pagar()}>
                Pagar
            </div>

            <form 
                className='form none'
                method="post" 
                action={Url}
                ref={myForm}
            >
                <input 
                    type="hidden" 
                    name="token_ws" 
                    value={Token} 
                />

                <input 
                    className='pago-boton'
                    type="submit" 
                    value="Ir a pagar" 
                />
            </form>
        </div>
    )
})