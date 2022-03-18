import { memo } from 'react'
import css from 'styled-jsx/css'
import { animateScroll as Scroll } from 'react-scroll'


const Fixed = css`
.scroll {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 39px;
    height: 39px;
    background-color: #96bd42;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 1s;
}

.scroll:hover {
    background-color: #7ca813;
    transition: 1s;
}
`


export default memo(() => {
    const scrollToTop = () => {
        Scroll.scrollToTop()
    }


    return (
        <div className="scroll" onClick={() => scrollToTop()}>
            <style jsx>{Fixed}</style>
        
        
            <img src="/icons/scroll-up.svg" alt="s" width={15} />
        </div>
    )
})