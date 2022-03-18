import Head from '../components/Head'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'
import Scroll2Top from '../components/Scroll2Top'
import Manager from '../components/Manager'
import { wrapper } from '../store'
import '../styles/main.css'
import '../styles/react-calendar-custom-styles.css'


function App({ Component, pageProps }) {
    return (
        <div>
            <Head />
            <Manager />
            <Component {...pageProps} />
            <Scroll2Top />
            <Footer />
            <Bottom />
        </div>    
    )
}


export default wrapper.withRedux(App)
