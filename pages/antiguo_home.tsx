import { memo, useState, useEffect } from 'react'
import Hora from '../components/Hora'
import axios from 'axios'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Section, Overlay } from '../styles/reservar-section-style'
import { horasDisponibles } from '../utils/horario'
import { config } from '../utils/axios-config'


export default memo(() => {
    const today: Date = new Date()
    const [Fecha, setFecha] = useState(today)
    const [Lista, setLista] = useState([])
    const [ShowCalendar, setShowCalendar] = useState(false)
    const [Preparado, setPreparado] = useState(false)
    const [Url, setUrl] = useState("")
    const [Token, setToken] = useState("")


    const Pagar = async () => {
        try {            
            const res = await axios.post(
                `${process.env.API}/pago`,
                { cantidadHoras: Lista.length },
                config
            )
            const data = res.data
            const token = data.token
            const url = data.url
            setToken(token)
            setUrl(url)
            setPreparado(true)
        } catch (error) {
            console.error(error.message)
        }
    }


    const HandleCalendar = (dia: Date) => {
        if (dia !== Fecha) setLista([])
        setFecha(dia)
    }


    useEffect(() => {
        console.log(Lista)
    }, [Lista, setLista])
    

    return (
        <div>
            <style jsx>{Section}</style>
            <style jsx>{Overlay}</style>
        

            <div className="container">
                <div className="left">
                </div>

                <div className="right">
                    {!Preparado ? <div>
                        <h3 className='titulo'>Cancha de Padel 1</h3>
                        <p className='subtitulo'>Reserva ahora pagando online, el precio por hora es $15.990</p>

                        <div className="reservar">

                            <div className='zona-dias-pago'>
                                <div 
                                    className="calendario-boton"
                                    onClick={() => setShowCalendar(true)}
                                >
                                    <img 
                                        src="/icons/calendario.svg" 
                                        alt="cal" 
                                    />
                                </div>
                                {ShowCalendar && <div className="calendario-popup">              
                                    <Calendar 
                                        minDate={today}
                                        onChange={dia => HandleCalendar(dia)} 
                                        value={Fecha} 
                                    />

                                    <div 
                                        className="overlay" 
                                        onClick={() => setShowCalendar(false)}
                                    />
                                </div>}

                                {Lista.length > 0 && <div 
                                    className="pago-boton"
                                    onClick={() => Pagar()}
                                >
                                    Confirmar Pago?
                                </div>}
                            </div>

                            <div className='horas'>
                                {horasDisponibles.map((hora, i) => (
                                    <Hora 
                                        key={i} 
                                        hora={hora}
                                        Lista={Lista}
                                        setLista={setLista}
                                        Fecha={Fecha}
                                    />
                                ))}
                            </div>
                        </div>
                    </div> : (
                        <form 
                            className='form'
                            method="post" 
                            action={Url}
                        >
                            <input 
                                type="hidden" 
                                name="token_ws" 
                                value={Token} 
                            />

                            <input 
                                className='pago-boton'
                                type="submit" 
                                value="Ir a pagar" 
                            />
                        </form>
                    )}
                </div>
            </div>
            
            <div>
                {JSON.stringify(Fecha)}
            </div>
            {JSON.stringify(Lista)}

        </div>
    )
})