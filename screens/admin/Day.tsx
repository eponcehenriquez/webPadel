import { memo, useState } from 'react'
import css from 'styled-jsx/css'
import dayjs from "dayjs"


const Day = css`
.day {
    border: 1px solid rgba(229,231,235, 1);
}
`


const Header = css`
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

.dia {
    margin-top: 4px;
    font-size: 16px;
    color: black;
}

.numero {
    font-size: 16px;
    margin-top: 10px;
    color: black;
}
`


const Seleccionado = css`
.seleccionado {
    background-color: #2563EB;
    border-radius: 100%;
    color: white;
    padding: 5px;
}
`


export default memo<any>(({day, rowIdx, setShowForm}) => {
    const [dayEvents, setDayEvents] = useState([])


    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "seleccionado"
            : ""
    }
    

    return(
        <div 
            className='day'
            onClick={() => setShowForm(true)}
        >
            <style jsx>{Day}</style>
            <style jsx>{Header}</style>
            <style jsx>{Seleccionado}</style>


            <header className="header">
                {rowIdx === 0 && (
                <p className="dia">
                    {day.format("ddd").toUpperCase()}
                </p>
                )}
                <p 
                    className={`numero text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}
                >
                    {day.format("DD")}
                </p>
            </header>
            <div
                className="flex-1 cursor-pointer"
                onClick={() => {
                // setDaySelected(day);
                // setShowEventModal(true);
                }}
            >
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        // onClick={() => setSelectedEvent(evt)}
                        // className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                    >
                        {/* {evt.title} */}
                    </div>
                ))}
            </div>
        </div>
    )
})