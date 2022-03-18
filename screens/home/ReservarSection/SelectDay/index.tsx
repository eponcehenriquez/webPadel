import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SelectDay } from '../../../../state/canchas/actions'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Overlay } from '../../../../styles/overlay'
import { 
    CalendarioBoton,
    CalendarioPopup,
    SeleccionarDias
} from './style'


export default memo<any>(({cancha}) => {
    const today: Date = new Date()
    const dispatch = useDispatch()
    const [ShowCalendar, setShowCalendar] = useState(false)


    const handleChange = dia => {
        dispatch(SelectDay({
            cancha: cancha,
            Day: dia
        }))
        setShowCalendar(false)
    }


    return(
        <div className='seleccionar-dias'>
            <style jsx>{SeleccionarDias}</style>
            <style jsx>{Overlay}</style>
            <style jsx>{CalendarioBoton}</style>
            <style jsx>{CalendarioPopup}</style>


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
                    onChange={dia => handleChange(dia)} 
                    value={cancha.date} 
                />

                <div 
                    className="overlay" 
                    onClick={() => setShowCalendar(false)}
                />
            </div>}
        </div>
    )
})