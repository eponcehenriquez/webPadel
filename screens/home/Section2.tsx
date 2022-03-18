import { memo } from 'react'
import css from 'styled-jsx/css'


const Container = css`
.container {
    max-width: 1000px;
    margin: auto;
    margin-bottom: 100px;
}
`


const Image = css`
.image {
    background-color: #FFFFFF;
    height: 300px;
}
`


export default memo(() => {
    return(
        <div>
            <style jsx>{Container}</style>
            <style jsx>{Image}</style>


            <div className="container">
                <div className="image">

                </div>
            </div>
        </div>
    )
})