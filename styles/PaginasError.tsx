import css from 'styled-jsx/css'


export const Header = css`
.header {
    background-color: #F6F7F3;
    height: 122px;
}

.flex {
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    font-weight: 700;
    height: 100%;
    font-size: 21px;
    color: #182E4B;
}
`


export const Body = css`
.body {
    margin: auto;
    margin-top: 20px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.codigo {
    font-size: 222px;
    font-weight: 700;
    color: #F6F7F3;
}

.desc {
    color: #1A3150;
    font-size: 32px;
    font-weight: 700;
}

.volver {
    margin-top: 20px;
    color: #727983;
    font-size: 13px;
}

.boton {
    background-color: #96bd42;
    color: white;
    padding: 16px 20px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 100px;
}
`
