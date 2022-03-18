import { memo } from 'react'
import Head from 'next/head'


interface IProps {
    titulo?:         string
    descripcion?:    string
    author?:         string
    ogTitle?:        string
    ogDescription?:  string
    imagen?:         string
}


export default memo<IProps>(({
    titulo = 'Padel Vip',
    descripcion = "Consigue aqui tu cancha de padel, reserva hoy en nuestro sitio via online", 
    author = "Padel Vip",
    ogTitle = "Padel Vip",
    ogDescription = "Consigue aqui tu cancha de padel, reserva hoy en nuestro sitio via online",
    imagen = "https://padel-vip-curico.vercel.app/img/logo.png"
}) => {
    return (
        <Head>
            <title>{titulo}</title>

            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />

            <meta property="title" content={titulo} key="title" />
            <meta name="description" content={descripcion} />
            <meta name="author" content={author} />
            <link rel="canonical" href="https://padel-vip-curico.vercel.app" />

            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:site_name" content="Padel Vip" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={imagen} />


            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={ogDescription} />
            <meta name="twitter:image" content={imagen} />
        </Head>
    )
})