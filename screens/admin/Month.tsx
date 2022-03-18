import React, { memo } from 'react'
import css from 'styled-jsx/css'
import Day from './Day'


const Grid = css`
.grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: calc(100vh - 60px);
    flex: 0.8;
}

@media(max-width: 1000px) {
    .grid {
        flex: 1;
    }
}
`


export default memo<any>(({month, setShowForm}) => {
    console.log(month)

    return(
        <div className='grid'>
            <style jsx>{Grid}</style>


            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day 
                            day={day} 
                            key={idx} 
                            rowIdx={i} 
                            setShowForm={setShowForm}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
})