import css from 'styled-jsx/css'


export const Background = css`
.background {
    background-color: rgb(246, 247, 243);
    height: 400px;
    overflow: hidden;
}
`


export const Container = css`
.container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    height: 400px;
}
`


export const Left = css`
.titulo {
    font-size: 31px;
}

.left {
    flex: 0.3;
    background-color: #96BD42;
    height: auto;
    padding: 40px 30px;
    color: white;
    box-shadow: -2px 2px 25px 0px rgb(0 0 0 / 25%);
}

.hr {
    border: 1px solid white;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 30px;
}

.texto {
    font-size: 13px;
    margin-bottom: 20px;
}
`


export const Canchas = css`
.canchas {
    display: flex;
    height: 60px;
    margin-bottom: 5px;
    background-color: #FFFFFF1A;
    transition: 0.5s;
}

.canchas:hover {
    background-color: #FFFFFF3A;
    cursor: pointer;
}

.img {
    object-fit: contain;
    overflow: hidden;
}

.detalles {
    padding: 10px;
    text-transform: capitalize;
}
`


export const Right = css`
@keyframes aparecer{
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.right {
    flex: 0.8;
    height: 100%;
    padding: 40px 30px;
    padding-right: 0;
}

.animacion {
    animation-name: aparecer;
    animation-duration: 1s;
}

.nombre {
    color: #1A3150;
    font-size: 31px;
    margin-bottom: 15px;
    text-transform: capitalize;
}

.hr-green {
    border: 1px solid #96BD42;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 30px;
}

.cancha-desc {
    color: #1A3150;
    text-transform: uppercase;
}

.reservacion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
}

.horas {
    overflow-y: scroll;
    max-height: 200px;
    padding-right: 10px;
}

.calendario {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dia {
    margin-top: 10px;
    padding: 10px;
    background-color: white;
}

.imagen {
    
}
`