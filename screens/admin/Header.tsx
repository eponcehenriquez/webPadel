import { memo } from 'react'
import Link from 'next/link'
import dayjs from "dayjs"
import { getMonth } from '../../utils/horario'
import { HeaderStyle } from './styles'


export default memo<any>(({Mes, setMes, setCurrentMonth}) => {
    const handleDownMonth = () => {
        setMes(Mes - 1)
        setCurrentMonth(getMonth(Mes - 1))
    }


    const handleUpMonth = () => {
        setMes(Mes + 1)
        setCurrentMonth(getMonth(Mes + 1))
    }


    const setHoy = () => {
        setCurrentMonth(getMonth())
        setMes(dayjs().month())
    }


    return (
        <nav className="header">
            <style jsx>{HeaderStyle}</style>


            <Link href={'/'}>
                <img 
                    width={60}
                    src="/img/padel21.png" 
                    alt="img" 
                />
            </Link>

            <div
                onClick={() => setHoy()}
                className="today"
            >
                Hoy
            </div>

            <h3 onClick={() => handleDownMonth()}>{'<'}</h3>
            <h3 onClick={() => handleUpMonth()}>{'>'}</h3>

            <h3>
                {dayjs(new Date(dayjs().year(), Mes)).format(
                    "MMMM YYYY"
                )}
            </h3>

        </nav>
    )
})