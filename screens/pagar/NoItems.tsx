import { memo } from 'react'
import css from 'styled-jsx/css'


const Card = css`
.card {
    margin-top: 30px;
    border-top: 3px solid #96bd42;
    background-color: #F6F7F7;
    padding: 20px;
}

.flex {
    display: flex;
    align-items: center;
}

.texto {
    color: #515151;
    font-size: 13px;
    margin-left: 10px;
}
`


export default memo(() => (
    <div className='card'>
        <style jsx>{Card}</style>

        <div className='flex'>
            <img src="/icons/bx_window.svg" alt="ic" width={20} />
            <p className='texto'>No Hay Reservaciones</p>
        </div>
    </div>
))