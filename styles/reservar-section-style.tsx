import css from 'styled-jsx/css'


export const Overlay = css`
.overlay {
    z-index: -1;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: #000000d6;
    top: 0;
    left: 0;
}
`


export const Section = css`
.container {
    margin: auto;
    margin-top: 30px;
    width: 90vw;
    padding: 30px;
    box-shadow: ;
    /* box-shadow: -8px -8px 15px #2F3034, 8px 8px 15px #191A1E; */
    height: 500px;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
}


.left {
    min-height: 300px;
    box-shadow: -8px -8px 15px #2F3034, 8px 8px 15px #191A1E;
    border-radius: 20px;
}


.right {
    padding: 40px;
    box-shadow: -8px -8px 15px #2F3034, 8px 8px 15px #191A1E;
    border-radius: 20px;
}


.titulo {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
}


.subtitulo {
    color: #DADADA;    
    font-size: 18px;
    line-height: 21px;
    margin-top: 15px;
}


.reservar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-top: 60px;
}


.zona-dias-pago {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


.calendario-boton {
    background: linear-gradient(114.86deg, #B03218 20.42%, #CC521C 76.67%);
    box-shadow: -6px -6px 8px #303134, 6px 6px 8px #1B1C20;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}


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


.pago-boton {
    margin-top: 20px;
    background: linear-gradient(114.86deg, #B03218 20.42%, #CC521C 76.67%);
    box-shadow: -6px -6px 8px #303134, 6px 6px 8px #1B1C20;
    padding: 6px 0px;
    width: 180px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
}


.horas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}


.form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media(max-width: 1100px) {
    .left {
        grid-area: left;
    }

    .right {
        grid-area: right;
    }

    .container {
        max-width: 550px;
        grid-template: "right" 1fr
                        "left" 1fr;
    }
}
`