import { memo } from 'react'
import { useSelector } from 'react-redux'
import Top from '../../components/Top'
import Navbar from '../../components/Navbar'
import Header2 from './Header2'
import BasketList from './BasketList'
import ReservarSection from '../home/ReservarSection'


export default memo(() => {
    const { canchas } = useSelector((state: any) => state.canchaListReducer)
    const { basket } = useSelector((state: any) => state.checkoutReducer)

    return (
        <div>
            <Top />
            <Navbar />
            <Header2 />
            <BasketList 
                basket={basket}
            />
            <ReservarSection 
                canchas={canchas}
                basket={basket}
            />
        </div>
    )
})