import { memo } from 'react'
import css from 'styled-jsx/css'


const Table = css`
table {
    border-collapse: collapse;
    width: 100%;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    color: #707276;
}

thead {
    background-color: #96bd42;
}

th {
    font-weight: 400;
    color: white;
    font-size: 15px;
}

td {
    font-size: 13px;
}

td, th {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
`


export default memo<any>(({basket}) => (
    <table>
        <style jsx>{Table}</style>


        <thead>
            <tr>
                <th></th>
                <th></th>
                <th>Lugar</th>
                <th>Hora</th>
                <th>Fecha</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            {basket.map((item, i) => (
                <tr key={i}>
                    <td>x</td>
                    <td>
                        <img 
                            src={item.img} 
                            width={60} 
                            alt="i" 
                        />
                    </td>
                    <td>{item.nombre}</td>
                    <td>{item.hour}</td>
                    <td>{item.day + "/" + item.month + "/" + item.year}</td>
                    <td>${item.precio}</td>
                </tr>
            ))}
        </tbody>
    </table>
))