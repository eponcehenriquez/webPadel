import { memo } from 'react'
import css from 'styled-jsx/css'


const Portada = css`
.portada {
    background-image: url('/img/slide3_bg.jpg');
    background-position: center;
    background-size: cover;
    height: 436px;
    margin-bottom: 100px;
}
`


export default memo(() => {
    return(
        <div className='portada'>
            <style jsx>{Portada}</style>


        </div>
    )
})