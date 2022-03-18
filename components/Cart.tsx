import { memo } from 'react'
import css from 'styled-jsx/css'
import { useSelector } from 'react-redux'


const Cart = css`
.cart {
    position: fixed;
    left: 0;
    top: 50%;
    background-color: #96bd42;
    padding: 15px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contador {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    background-color: red;
    /* background-color: #1A3150; */
    position: absolute;
    right: 3px;
    top: 3px;
    font-size: 14px;
    font-weight: 500;
}
`


export default memo(() => {
    const { basket } = useSelector((state: any) => state.checkoutReducer)
    
    
    return (
        <div className='cart'>
            <style jsx>{Cart}</style>


            <img src='/icons/cart-white.svg' width={35} color="white" />
            {basket.length > 0 && <div className="contador">
                {basket.length}
            </div>}
        </div>
    )
})