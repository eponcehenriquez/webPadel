import css from 'styled-jsx/css'


export const Background = css`
.back {
    background-color: #1A3150;
    height: 50px;
    color: #D0D6DE;
}

.container {
    height: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
}
`


export const Tel = css`
.tel {
    margin-right: 40px;
    font-size: 13px;
    display: flex;
    align-items: center;
}

.tel img {
    margin-right: 8px;
}

.tel:hover {
    color: #96bd42;
    transition: 0.5s;
}
`


export const Email = css`
.email {
    font-size: 13px;
    display: flex;
    align-items: center;
}

.email img {
    margin-right: 8px;
}

.email:hover {
    color: #96bd42;
    transition: 0.5s;
}
`


export const Cart = css`
.cart {
    height: 100%;
    margin-left: auto;
    margin-right: 40px;
    font-size: 13px;
    display: flex;
    align-items: center;
    position: relative;
}

.cart img {
    margin-right: 8px;
}

.cart:hover {
    color: #96bd42;
    transition: 0.5s;
}

.detalles {
    display: none;
    transition: 1s;
    position: absolute;
    background-color: #F6F7F3;
    top: 50px;
    left: 0px;
    min-height: 100px;
    min-width: 200px;
    color: #707276 !important;
    padding: 20px;
}

.items {
    max-height: 200px;
    overflow-y: scroll;
    margin-bottom: 6px
}

.item {
    margin-bottom: 6px;
    display: flex;
}

.cart:hover .detalles {
    display: inline-block;
}

.cart:hover .detalles:hover {
    display: inline-block;
}

.cart .detalles:hover {
    display: inline-block;
    color: #061F37;
}

.boton {
    padding: 10px;
    text-decoration: none;
    color: white;
    background-color: #96bd42;
    display: inline-block;
}
`


export const Button = css`
.button {
    background-color: #96bd42;
    height: 100%;
    width: 160px;
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    /* margin-left: auto; */
}
`
