import { memo } from 'react'
import Home from '../screens/home'
import Layout from '../layouts/Layout'


export default memo(() => {
    return (
        <Layout>
            <Home />
        </Layout>
    )
})