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
    webkit-aspect-ratio: 1/1;
    background-image: url('/img/custom_bg2.webp');
    background-size: cover;
    height: 450px;
    max-width: 700px;
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