import Head from 'next/head'
import dynamic from 'next/dynamic'
import css from 'styled-jsx/css'
import 'smart-webcomponents-react/source/styles/smart.default.css'


const Scheduler = dynamic(() => import('smart-webcomponents-react/scheduler'), {
    ssr: false
})


const CalendarStyle = css`
.scheduler {
    width: 100vw !important;
}


`


function Home() {
    const dataSource = []
    const currentTimeIndicator = true
    const shadeUntilCurrentTime = true
    const view = 'month'
    const views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth']
    const firstDayOfWeek = 1

    return (
        <div >
            <style jsx>{CalendarStyle}</style>


            <main >
                <Scheduler  
                    id="scheduler" 
                    currentTimeIndicator={currentTimeIndicator} 
                    shadeUntilCurrentTime={shadeUntilCurrentTime} 
                    disableWindowEditor={true}
                    onChange={(e) => console.log(e)}
                    dataSource={dataSource} 
                    view={view} 
                    views={views} 
                    firstDayOfWeek={firstDayOfWeek}

                />

            </main>
        </div>
    )
}


export default Home