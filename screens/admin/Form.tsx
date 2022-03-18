import { memo } from 'react'
import css from 'styled-jsx/css'


const Container = css`
.container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.7);
}

.modal {
    background-color: white;
    min-width: 300px;
    min-height: 450px;
    z-index: 10;
}
`


const Header = css`
.header {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F3F4F6 !important;
    padding-left: 15px;
    padding-right: 15px;
    color: #333435;
}
`


export default memo<any>(({setShowForm}) => {
    return (
        <div className='container'>
            <style jsx>{Container}</style>
            <style jsx>{Header}</style>


            <div className='modal'>
                <div className="header">
                    <p>Agendar</p>
                    <p onClick={() => setShowForm(false)}>
                        x
                    </p>
                </div>
            </div>
            <div 
                className='overlay'
                onClick={() => setShowForm(false)}
            >
            </div>
        </div>
    )
})