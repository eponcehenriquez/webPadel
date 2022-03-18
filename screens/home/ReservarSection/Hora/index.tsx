import { memo, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { 
    AddToBasket, 
    RemoveFromBasket 
} from '../../../../state/checkout/actions'
import { IBasket, ICanchaFormated, IItem } from '../../../../types'
import { Hora } from './styles'


interface HoraProps {
    hora:   string
    cancha: ICanchaFormated
    basket: IBasket
    precio: number
}


export default memo<HoraProps>(({hora, cancha, basket, precio}) => {
    const dispatch = useDispatch()
    const [Selected, setSelected] = useState(false)
    const [Disabled, setDisabled] = useState(false)


    const handleSelected = () => {
        if (Disabled) {
            setSelected(false)
            return
        }

        if (Selected) {
            const arr = basket.filter((item) => {
                return (
                    item?.cancha_id === cancha?.id && 
                    item?.day       === cancha?.day && 
                    item?.month     === cancha?.month &&
                    item?.year      === cancha?.year &&
                    item?.hour      === hora
                ) === false
            })
            dispatch(RemoveFromBasket(arr))
        } else {
            const item: IItem = {
                cancha_id: cancha.id,
                nombre:    cancha.nombre,
                img:       cancha.image_url,
                precio:    precio,
                day:       cancha.day,
                month:     cancha.month,
                year:      cancha.year,
                hour:      hora
            }
            dispatch(AddToBasket(item))
            setSelected(true)
        }

        setSelected(!Selected)
    }


    useEffect(() => {
        let existe = false
        basket.map((item: IItem) => {
            if(
                hora          === item?.hour &&
                cancha?.id    == item?.cancha_id &&
                cancha?.day   == item?.day &&
                cancha?.month == item?.month &&
                cancha?.year  == item?.year
            ) {
                existe = true
            }
        })
        if (existe) setSelected(true)
        else setSelected(false)
    }, [cancha, hora, basket])


    return(
        <div 
            className={'hora ' + (Selected ? 'selected' : 'unselected')}
            onClick={() => handleSelected()}
        >
            <style jsx>{Hora}</style>
            

            {hora}
        </div>
    )
})