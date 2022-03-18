import { memo, useState } from 'react'
import dayjs from "dayjs"
import { getMonth } from '../../utils/horario'
import Month from './Month'
import Header from './Header'
import Form from './Form'
import { Body, Sidebar } from './styles'


export default memo(() => {
    const [currenMonth, setCurrentMonth] = useState(getMonth())
    const [Mes, setMes] = useState(dayjs().month())
    const [ShowForm, setShowForm] = useState(false)


    return (
        <div>
            <style jsx>{Body}</style>
            <style jsx>{Sidebar}</style>

            {ShowForm && <Form 
                setShowForm={setShowForm}
            />}

            <Header 
                Mes={Mes}
                setMes={setMes}
                setCurrentMonth={setCurrentMonth}
            />

            <div className='body'>
                <aside className='sidebar'></aside>
                <Month 
                    month={currenMonth}
                    setShowForm={setShowForm}
                />
            </div>
        </div>
    )
})