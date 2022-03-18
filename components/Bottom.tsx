import { memo } from 'react'
import css from 'styled-jsx/css'


const Bottom = css`
.bottom {
    background-color: #1a3150;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.link {
    color: white;
    margin-left: 6px;
}

.link:hover {
    color: #96bd42;
}
`


export default memo(() => {
    return(
        <div className='bottom'>
            <style jsx>{Bottom}</style>

            <p>
                Hecho Por 
                <a target="_blank" href="http://www.grullas.cl/" className='link'>
                    grullas.cl
                </a>
            </p>
        </div>
    )
})