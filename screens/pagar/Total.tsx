import { memo } from 'react'
import css from 'styled-jsx/css'
import { getBasketTotal } from '../../state/checkout/actions'
import axios from 'axios'
import { config } from '../../utils/axios-config'


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


export default memo<any>(({basket}) => {
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
            // setToken(token)
            // setUrl(url)
            // setPreparado(true)
        } catch (error) {
            console.error(error.message)
        }
    }


    return(
        <div className="total">
            <style jsx>{Total}</style>
            <style jsx>{Table}</style>


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
        </div>
    )
})