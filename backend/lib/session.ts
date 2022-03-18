import { parse, serialize } from 'cookie'
import { createLoginSession, getLoginSession } from './auth'


/**
 * 
 * @param req request de la peticion
 * @returns un json con informacion de las cookies
 */
function parseCookies(req) {
    // For API Routes we don't need to parse the cookies.
    console.log('verificando cookies de la peticion')
    if (req.cookies) return req.cookies
    console.log('parseando cookies')

    // For pages we do need to parse the cookies.
    const cookie = req.headers?.cookie
    return parse(cookie || '')
}


/**
 * esta funcion es requisito de passport, 
 * se ejecuta siempre en el middleware auth
 * @param param0 
 * @returns nada porque es un middleware, pero setea cookies
 */
export default function session({ name, secret, cookie: cookieOpts }) {
    return async (req, res, next) => {
        console.log('ejecutando session')
        const cookies = parseCookies(req)
        const token = cookies[name]
        let unsealed = {}

        if (token) {
            try {
              // the cookie needs to be unsealed using the password `secret`
                unsealed = await getLoginSession(token, secret)
            } catch (e) {
                console.log('invalid cookies')
              // The cookie is invalid
            }
        }

        req.session = unsealed

        // We are proxying res.end to commit the session cookie
        const oldEnd = res.end
        res.end = async function resEndProxy(...args) {
            if (res.finished || res.writableEnded || res.headersSent) return
            if (cookieOpts.maxAge) {
                req.session.maxAge = cookieOpts.maxAge
            }

            const token = await createLoginSession(req.session, secret)

            res.setHeader('Set-Cookie', serialize(name, token, cookieOpts))
            oldEnd.apply(this, args)
        }
        
        next()
    }
}