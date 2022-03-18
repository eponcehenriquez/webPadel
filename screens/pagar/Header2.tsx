import { memo } from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'


const Header = css`
.header {
    color: #707276;
    background-color: #F6F7F3;
    height: 78px;
}

.flex {
    height: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
}
`


export default memo(() => {
    return(
        <div>
            <style jsx>{Header}</style>


            <div className="header">
                <div className="flex">
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                </div>
            </div>
        </div>
    )
})