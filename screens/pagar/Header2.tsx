import { memo } from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'


const Header = css`
.header {
    color: #707276;
    background-color: #F6F7F3;
    height: 78px;
}

.flex {
    height: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.flex a {
    font-size: 12px;
    color: #1A3150;
    transition: 1s;
}

.flex a:hover {
    color: #96BD42;
}
`


export default memo(() => {
    return(
        <div>
            <style jsx>{Header}</style>


            <div className="header">
                <div className="flex">
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                    &nbsp; / &nbsp; 
                    <Link href="/pagar">
                        <a>pagar</a>
                    </Link>
                </div>
            </div>
        </div>
    )
})