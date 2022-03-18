import { memo, useState, useEffect } from 'react'
import css from 'styled-jsx/css'


const Hora = css`
.hora {
    cursor: pointer;
    color: white;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}


.selected {
    background: linear-gradient(114.86deg, #B03218 20.42%, #CC521C 76.67%);
    box-shadow: -6px -6px 8px #303134, 6px 6px 8px #1B1C20;
}


.unselected {
    box-shadow: -6px -6px 8px #2F3034, 6px 6px 8px #191A1E;
}
`


export default memo<any>(({hora, Lista, setLista, Fecha}) => {
    const [Selected, setSelected] = useState(false)
    const [Disabled, setDisabled] = useState(false)


    useEffect(() => {
        setSelected(false)
    }, [Fecha])
    


    const handleSelected = () => {
        setSelected(!Selected)
        const array = Lista
        if(Selected) {
            const arr2 = array.filter((h) => {
                return h !== hora
            })
            setLista(arr2)
        } else {
            const arr2 = [
                ...array,
                hora
            ]
            setLista(arr2)
            console.log(arr2)
        }
    }


    return (
        <div 
            className={'hora ' + (Selected ? 'selected' : 'unselected')}
            onClick={() => handleSelected()}
        >
            <style jsx>{Hora}</style>
            

            {hora}
        </div>
    )
})