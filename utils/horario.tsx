import dayjs from "dayjs"
import "dayjs/locale/es"


export const horasDisponibles = [
    '08:00',
    '09:30',
    '11:00',
    '12:30',
    '14:00',
    '15:30',
    '17:00',
    '18:30',
    '20:00',
    '21:30',
    '23:00'
]


export const horasPrecio = [
    {hora: '08:00', precio: 12000},
    {hora: '09:30', precio: 12000},
    {hora: '11:00', precio: 12000},
    {hora: '12:30', precio: 12000},
    {hora: '14:00', precio: 12000},
    {hora: '15:30', precio: 12000},
    {hora: '17:00', precio: 20000},
    {hora: '18:30', precio: 20000},
    {hora: '20:00', precio: 20000},
    {hora: '21:30', precio: 20000},
    {hora: '23:00', precio: 20000}
]


dayjs.locale('es')


export function getMonth(month = dayjs().month()) {
    month = Math.floor(month)
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
    let currentMonthCount = 0 - firstDayOfTheMonth

    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })

    return daysMatrix
}