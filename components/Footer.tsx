import { memo } from 'react'
import css from 'styled-jsx/css'


const Footer = css`
.footer {
    height: 350px;
    background-color: #f6f7f3;
}

.container {
    margin: auto;
    height: 100%;
    padding-top: 70px;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
}
`


export default memo(() => {
    return(
        <footer className="footer">
            <style jsx>{Footer}</style>


            <div className="container">
                <div>logo</div>
                <div>news</div>
                <div>contacto</div>
                <div>ultimos posts</div>
            </div>
        </footer>
    )
})