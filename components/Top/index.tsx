import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getBasketTotal } from '../../state/checkout/actions'
import Link from "next/link"
import {
    Background,
    Button,
    Cart,
    Email,
    Tel
} from './styles'


export default memo(() => {
    const { basket } = useSelector((state: any) => state.checkoutReducer)


    return (
        <div className='back'>
            <style jsx>{Background}</style>
            <style jsx>{Tel}</style>
            <style jsx>{Email}</style>
            <style jsx>{Cart}</style>
            <style jsx>{Button}</style>

            
            <div className="container">
                <div className="tel">
                    <img src='/icons/cel.svg' width={20} />
                    +569 58491996
                </div>
                <div className="email">
                    <img src='/icons/email.svg' width={20} />
                    contacto@gymvipbody.cl
                </div>

                <div className="cart">
                    <img src='/icons/cart.svg' width={20} />
                    {basket.length} Reservaciones - Total: ${getBasketTotal(basket)}
                    
                    {(basket.length > 0) ? (
                        <div className="detalles">
                            <div className="items">
                                {basket.map((cancha: any, i) => (
                                    <div key={i}>
                                        <div className="item">
                                            <img src={cancha.img} alt="" width={60} />
                                            <div>
                                                <p>{cancha.nombre}</p>
                                                <p>{cancha.day + "/" + cancha.month + "/" + cancha.year}</p>
                                                <p>${cancha.precio}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Link href="/pagar">
                                    <a>
                                        <div className="boton">
                                            Ver Reservaciones
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>) : (
                        <div className="detalles">
                            <p>No hay reservaciones</p>
                        </div>
                    )}
                </div>
                <div className="button">
                    Reservar
                </div>
            </div>
        </div>
    )
})