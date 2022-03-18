import { memo } from 'react'
import css from 'styled-jsx/css'
import NoItems from './NoItems'
import Items from './Items'
import Total from './Total'


const Container = css`
.container {
    max-width: 1000px;
    margin: auto;
    min-height: 150px;
}

.items {
    margin-top: 30px;
    margin-bottom: 30px;
}
`


export default memo<any>(({basket}) => (
    <div>
        <style jsx>{Container}</style>


        <div className="container">
            {basket.length > 0 ? (
                <div className='items'>
                    <Items basket={basket} />
                    <Total basket={basket} />
                </div>
            ) : (
                <NoItems />
            )}
        </div>
    </div>
))