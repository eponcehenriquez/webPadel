import { memo, useState, useEffect } from 'react'
import {
    Background,
    Canchas,
    Container,
    Left,
    Right
} from './styles'
import { horasPrecio } from '../../../utils/horario'
import Hora from './Hora'
import SelectDay from './SelectDay'


export default memo<any>(({canchas, basket}) => {
    const [Cancha, setCancha] = useState(canchas[0])
    const [Index, setIndex] = useState(0)
    const [Animado, setAnimado] = useState(false)


    const handleAnimation = () => {
        setAnimado(true)
    }


    useEffect(() => {
        setCancha(canchas[Index])
        setAnimado(false)
        setTimeout(handleAnimation, 1000)
    }, [Index, canchas])
    


    return (
        <div className='background'>
            <style jsx>{Background}</style>
            <style jsx>{Container}</style>
            <style jsx>{Left}</style>
            <style jsx>{Canchas}</style>
            <style jsx>{Right}</style>
            

            <div className="container">

                {/* ***************** LEFT ****************** */}

                <div className="left">
                    <h2 className='titulo'>Canchas</h2>
                    <hr className="hr" />
                    <p className='texto'>SELECCIONA LA CANCHA DONDE QUIERES JUGAR</p>

                    {canchas.map((cancha, i) => (
                        <div 
                            className='canchas' 
                            key={i}
                            onClick={() => setIndex(i)}
                        >
                            <div className="img">
                                <img 
                                    width={80}
                                    src={cancha.image_url} 
                                />
                            </div>

                            <div className="detalles">
                                <h5>{cancha.nombre}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ***************** RIGHT ****************** */}

                <div className={"right " + (!Animado && "animacion")}>
                    <h2 className="nombre">{Cancha?.nombre}</h2>
                    <hr className="hr-green" />
                    <p className="cancha-desc">{Cancha?.descripcion}</p>
                    
                    <div className='reservacion'>
                        <div className="horas">
                            {horasPrecio.map((hora, i) => (
                                <Hora 
                                    key={i} 
                                    hora={hora.hora} 
                                    precio={hora.precio} 
                                    cancha={Cancha} 
                                    basket={basket}
                                />
                            ))}
                        </div>

                        <div className="calendario">
                            <SelectDay cancha={Cancha} />
                            <div className="dia">
                                {Cancha?.day + "/" + Cancha?.month + "/" + Cancha?.year}
                            </div>
                        </div>

                        <div className="imagen">
                            <img 
                                width={200}
                                src={Cancha?.image_url} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})