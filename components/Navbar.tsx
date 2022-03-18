import { memo } from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'


const Navbar = css`
.navbar {
    height: 140px;
}

.container {
    height: 140px;
    margin: auto;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

a {
    font-size: 11px;
    color: #7A7F87;
    text-decoration: none;
    margin-right: 20px;
}

.selected {
    color: #061f37 !important;
}
`


const Right = css`
.right {
    display: flex;
    align-items: center;
}
`


const Social = css`
.social {
    display: flex;
    align-items: center;
    height: 40px;
    width: 120px;
}

.twitter {
    height: 40px;
    width: 40px;
    background-color: #1ca9eb;
}

.facebook {
    height: 40px;
    width: 40px;
    background-color: #36508a;
}

.youtube {
    height: 40px;
    width: 40px;
    background-color: #e13e30;
}
`


export default memo(() => {
    return(
        <nav className='navbar'>
            <style jsx>{Navbar}</style>
            <style jsx>{Social}</style>
            <style jsx>{Right}</style>

        
            <div className="container">
                <img src='/img/padel21.png' width={80} />

                <div className='right'>
                    <div className="links">
                        <Link href={'/'}>
                            <a className='selected'>
                                INICIO
                            </a>
                        </Link>
                        <Link href={'/pagar'}>
                            <a>
                                RESERVAR
                            </a>
                        </Link>
                        <a href="https://www.vipbody.cl/shop/" target="_blank">
                            TIENDA
                        </a>
                        <a href="https://www.vipbody.cl" target="_blank">
                            GIMNASIO
                        </a>
                        <a href="https://www.vipbody.cl/about-us/" target="_blank">
                            QUIENES SOMOS
                        </a>
                        <Link href={'/admin'}>
                            <a>
                                ADMIN
                            </a>
                        </Link>
                    </div>

                    <div className="social">
                        <div className="twitter"></div>
                        <div className="facebook"></div>
                        <div className="youtube"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
})