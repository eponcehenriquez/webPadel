import { memo } from 'react'
import css from 'styled-jsx/css'


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


export default memo(() => (
    <div className="total">
        <style jsx>{Total}</style>
        <style jsx>{Table}</style>


        <h2>Precio Total</h2>

        <div className="computo">
            <table>
                <tbody>
                    <tr>
                        <th>Subtotal</th>
                        <td className='sub'>$324234</td>
                    </tr>
                    <tr>
                        <th>Total:</th>
                        <td>$645645</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className="boton">
            Pagar
        </div>
    </div>
))