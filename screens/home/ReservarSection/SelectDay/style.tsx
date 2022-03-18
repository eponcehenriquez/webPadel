import css from 'styled-jsx/css'


export const CalendarioBoton = css`
.calendario-boton {
    background: #96BD42;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
`


export const SeleccionarDias = css`
.seleccionar-dias {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`


export const CalendarioPopup = css`
.calendario-popup {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
