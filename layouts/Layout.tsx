import { memo } from 'react'
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import Cart from '../components/Cart'


export default memo(({children}) => {
    return (
        <div>
            <Top />
            <Cart />
            <Navbar />
            {children}
        </div>
    )
})