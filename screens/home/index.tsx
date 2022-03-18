import { memo } from 'react'
import { useSelector } from 'react-redux'
import Portada from './Portada'
import Section1 from './Section1'
import Section2 from './Section2'
import ReservarSection from './ReservarSection'
import { Container } from './styles'


export default memo(() => {
    const { canchas } = useSelector((state: any) => state.canchaListReducer)
    const { basket } = useSelector((state: any) => state.checkoutReducer)


    return(
        <div>
            <style jsx>{Container}</style>


            <Portada />
            <Section1 />
            {canchas.length ? (
                <ReservarSection 
                    canchas={canchas} 
                    basket={basket}
                />) : (
                <p style={{textAlign: "center"}}>
                    cargando...
                </p>
            )}
            <Section2 />
        </div>
    )
})