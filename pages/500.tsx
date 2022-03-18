import { memo } from 'react'
import Link from 'next/link'
import Top from '../components/Top'
import Navbar from '../components/Navbar'
import { Body, Header } from '../styles/PaginasError'


export default memo(() => (
    <div>
        <style jsx>{Header}</style>
        <style jsx>{Body}</style>

        <Top />
        <Navbar />

        <div>
            <div className="header">
                <div className="flex">
                    Error de Servidor
                </div>
            </div>
            <div className="body">
                <div className="codigo">500</div>
                <div className='desc'>Ha Ocurrido un Error, disculpe las molestias</div>
                <p className='volver'>Haz click en el boton para volver a Inicio</p>
                <Link href="/">
                    <a>
                        <div className="boton">
                            Volver a Inicio
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </div>
))